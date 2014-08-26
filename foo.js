var fs = require('fs');
function main() {
  fs.open('input.txt', 'r', function(err, fdRead) {
    fs.open('encrypted.txt', 'w', function(err, fdWrite) {
      function readNextBuffer(done) {
        var readBuffer = new Buffer(1024);
        fs.read(fdRead, readBuffer, 0, readBuffer.length, null, function(err, bytesRead) {
          if (bytesRead === 0)
            done();
          var bufferToWrite = encrypt(readBuffer, bytesRead);
          fs.write(fdWrite, bufferToWrite, 0, bufferToWrite.length, null, function(err) {
            readNextBuffer(done);
          });
        });
      }
      readNextBuffer(function() {
        fs.close(fdWrite, function(err) {
          fs.close(fdRead, function() {
            process.exit(0);
          });
        });
      });
    });
  });
}
function encrypt(readBuffer, bytesRead) {
  var writeBuffer = new Buffer(bytesRead);
  readBuffer.copy(writeBuffer, 0, 0, bytesRead);
  return writeBuffer;
}
main();
