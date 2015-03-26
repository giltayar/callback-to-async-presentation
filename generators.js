function* firstThreeNumbers() {
    console.log("y 1")
    yield 1
    console.log("y 2")
    yield 2
    console.log("y 3")
    yield 3
    console.log("d!")
}

for (var i of firstThreeNumbers())
    console.log(i);

var iterator = firstThreeNumbers();
console.log(iterator.next()); //"y 1",{done: false, value: 1}
console.log(iterator.next()); //"y 2",{done: false, value: 2}
console.log(iterator.next()); //"y 3",{done: false, value: 3}
console.log(iterator.next()); //"d!",{done: true, value: undefined}

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

function* multTablePairs() {
    for (var i = 1; i <= 10; ++i)
        for (var j = 1; j <= 10; j++)
            if (i * j % 2 == 0)
                yield i * j;
}

for (var i of multTablePairs())
  console.log(i);


for (var i of firstThreeNumbers())
    console.log(i);

function* bidirectional() {
    console.log("y 1")
    var n = yield 1

    console.log("y n*2")
    var b = yield n * 2

    console.log("y b*2")
    yield b * 2
    console.log("d!")
}

var iterator = bidirectional();
iterator.next(); //{done: false, value: 1}
iterator.next(3); //{done: false, value: 6}
iterator.next(5); //{done: false, value: 10}
iterator.next(); //{done: true, value: undefined}
