fs.open('file-name.txt', 'r', function(err, fd) {
    ...  
})

var promise = promisedOpen('file-name.txt', 'r');

promisedOpen.then(function(fd) {
    ...
})

promisedOpen('file-name.txt', 'r').then(function(fd) {
    ...
}, function(err) {

});

fs.open('file-name.txt', 'r', function(err, fd) {
    ...
    fs.open('another.txt', 'r', function(err, fd) {
        ...
    })  
})

var anotherPromise = promisedOpen('file-name.txt', 'r').then(function(fd) {
    return promisedOpen('another-file.txt');
});

anotherPromise.then(function(value) {
    console.log(value);
})

promisedOpen('file-name.txt', 'r').then(function(fd) {
    return promisedOpen('another.txt', 'r');
}).then(function(fd) {
    ...
}).catch(function(err) {
    ...
})
›
Or...

Promise.all([
    promisedOpen('file-name.txt', 'r'),
    promisedOpen('another.txt', 'r')
]).then(function([fd1, fd2]) {
    ...
}))
