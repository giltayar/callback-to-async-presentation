function* firstThreeNumbers() {
    yield 1
    yield 2
    yield 3
}

var iterator = firstThreeNumbers();
iterator.next(); //{done: false, value: 1}
iterator.next(); //{done: false, value: 2}
iterator.next(); //{done: false, value: 3}
iterator.next(); //{done: true, value: undefined}

for (var i of firstThreeNumbers())
    console.log(i);

function* bidirectional() {
    var n = yield 1

    var b = yield n * 2

    yield b * 2
}

var iterator = bidirectional();
iterator.next(); //{done: false, value: 1}
iterator.next(3); //{done: false, value: 6}
iterator.next(5); //{done: false, value: 10}
iterator.next(); //{done: true, value: undefined}
