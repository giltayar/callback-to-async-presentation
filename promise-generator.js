var fs = require('fs');

function* promisesPromisesPromises() {
    yield ctop(fs.writeFile)("a-file.txt", "some text");

    yield ctop(fs.writeFile)("another-file.txt", "some other text"); 
}

var promiseIterator = promisesPromisesPromises();

promiseIterator.next().value.then(function() {
    return promiseIterator.next().value;
}).then(function() {
    process.exit(0);
})

function *bidirectional() {
    var content = yield ctop(fs.readFile)("a-file.txt");

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
