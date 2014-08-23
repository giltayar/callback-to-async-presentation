var fs = require('fs');

function main() {
    var fdRead = fs.openSync('input.txt', 'r');
    var fdWrite = fs.openSync('encrypted.txt', 'w');
    var readBuffer = new Buffer(1024);

    for (var bytesRead; 
         bytesRead = fs.readSync(fdRead, readBuffer, 0, readBuffer.length, null);) {

        var bufferToWrite = encrypt(readBuffer, bytesRead);

        fs.writeSync(fdWrite, bufferToWrite, 0, bufferToWrite.length, null);
    }

    fs.closeSync(fdWrite);
    fs.closeSync(fdRead);
}

main();

function encrypt(readBuffer, bytesRead) {
    var writeBuffer = new Buffer(bytesRead);

    readBuffer.copy(writeBuffer, 0, 0, bytesRead);

    return writeBuffer;
}
