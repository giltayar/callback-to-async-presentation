var fs = require('fs');

function* main() {
    var fdRead = yield ctop(fs.open)('input.txt', 'r');
    var fdWrite = yield ctop(fs.open)('encrypted.txt', 'w');
    var readBuffer = new Buffer(1024);

    for (var bytesRead; 
         bytesRead = yield ctop(fs.read)(fdRead, readBuffer, 0, readBuffer.length, null);) {

        var bufferToWrite = encrypt(readBuffer, bytesRead);

        yield ctop(fs.write)(fdWrite, bufferToWrite, 0, bufferToWrite.length, null);
    }

    yield ctop(fs.close)(fdWrite);
    yield ctop(fs.close)(fdRead);
}

function encrypt(readBuffer, bytesRead) {
    var writeBuffer = new Buffer(bytesRead);

    readBuffer.copy(writeBuffer, 0, 0, bytesRead);

    return writeBuffer;
}

function ctop(func) {
    return function(...args) {
        return new Promise(function (fulfill, reject) {
            args.push(function(err, ...resultArgs) {
                if (err)
                    reject(err);
                else
                    fulfill(...resultArgs);
            })
            func(...args)
        })
    }
}

function async(promiseIterator) {
    var {value: promise, done} = promiseIterator.next();
    if (done)
        return;

    return continueIterating(promise);

    function continueIterating(p) {
        return p.then(function(result) {
            var {value: promise, done} = promiseIterator.next(result);
            if (done)
                return;

            return continueIterating(promise);
        })
    }
}

async(main());