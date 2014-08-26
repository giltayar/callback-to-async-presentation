require('traceur/bin/traceur-runtime')
var fs = require('fs');

async function main() {
  var fdRead = await ctop(fs.open)('input.txt', 'r');
  var fdWrite = await ctop(fs.open)('encrypted.txt', 'w');
  var readBuffer = new Buffer(1024);

  for (var bytesRead; 
       bytesRead = await ctop(fs.read)(fdRead, readBuffer, 
              0, readBuffer.length, null);) {

    var bufferToWrite = encrypt(readBuffer, bytesRead);

    await ctop(fs.write)(fdWrite, bufferToWrite, 
              0, bufferToWrite.length, null);
  }

  await ctop(fs.close)(fdWrite);
  await ctop(fs.close)(fdRead);
}

main();

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
