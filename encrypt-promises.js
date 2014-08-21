var fs = require('fs');

function main() {
    var fdRead;
    ctop(fs.open)('input.txt', 'r').
    then(function(fdRead_) {
        fdRead = fdRead_;
        return ctop(fs.open)('encrypted.txt', 'w')
    }).
    then(function(fdWrite) {
        function readNextBuffer() {
            var readBuffer = new Buffer(1024);

            return ctop(fs.read)(fdRead, readBuffer, 0, readBuffer.length, null).
            then(function(bytesRead) {
                ...
            })
        }

        return readNextBuffer().then(function() {
            return ctop(fs.close)(fdWrite);
        }).then(function() {
            return ctop(fs.close)(fdRead);
        }).then(function() {
            process.exit(0);
        });
    })
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
                else {
                    fulfill(...resultArgs);
                }
            })
            func(...args)
        })
    }
}

function promisedOpen(fileName, mode) {
    return new Promise(function(fulfill, reject) {
        fs.open(fileName, mode, function(err, fd) {
            if (err)
                reject(err);
            else
                fulfill(fd);
        });
    });
}

main();
