function* firstThreeNumbers() {
    yield 1
    yield 2
    yield 3
}

function firstThreeNumbers() {
    return {
        i: 0,
        next() {
            ++this.i
            if (this.i <= 3)
                return {done: false, value: this.i}
            else
                return {done: true}
        }
    }
}

var iterator = firstThreeNumbers();
console.log(iterator.next()); //{done: false, value: 1}
console.log(iterator.next()); //{done: false, value: 2}
console.log(iterator.next()); //{done: false, value: 3}
console.log(iterator.next()); //{done: true, value: undefined}

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
