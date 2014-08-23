var fs = require('fs');

function main() {
    fs.open('input.txt', 'r', function(err, fdRead) {
        ...
    })
}

function encrypt(readBuffer, bytesRead) {
    var writeBuffer = new Buffer(bytesRead);

    readBuffer.copy(writeBuffer, 0, 0, bytesRead);

    return writeBuffer;
}

main();