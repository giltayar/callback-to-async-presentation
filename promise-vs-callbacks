fs.open('file-name.txt', 'r', function(err, fd) {
    ...  
})


promisedOpen('file-name.txt', 'r').then(function(fd) {
    ...
}).catch(function(err) {
    ...
})


fs.open('file-name.txt', 'r', function(err, fd) {
    ...
    fs.open('another.txt', 'r', function(err, fd) {
        ...
    })  
})


promisedOpen('file-name.txt', 'r').then(function(fd) {
    return promisedOpen('another.txt', 'r');
}).then(function(fd) {
    ...
}).catch(function(err) {
    ...
})

Or...

Promise.all([
    promisedOpen('file-name.txt', 'r'),
    promisedOpen('another.txt', 'r')
]).then(function([fd1, fd2]) {
    ...
}))
