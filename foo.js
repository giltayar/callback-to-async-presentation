var $__2 = $traceurRuntime.initGeneratorFunction(firstThreeNumbers),
    $__3 = $traceurRuntime.initGeneratorFunction(bidirectional);
function firstThreeNumbers() {
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = 2;
          return 1;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return 2;
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 8;
          break;
        case 8:
          $ctx.state = 10;
          return 3;
        case 10:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__2, this);
}
var iterator = firstThreeNumbers();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
for (var $__0 = firstThreeNumbers()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__1; !($__1 = $__0.next()).done; ) {
  var i = $__1.value;
  console.log(i);
}
function bidirectional() {
  var n,
      b;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = 2;
          return 1;
        case 2:
          n = $ctx.sent;
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return n * 2;
        case 6:
          b = $ctx.sent;
          $ctx.state = 8;
          break;
        case 8:
          $ctx.state = 10;
          return b * 2;
        case 10:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__3, this);
}
var iterator = bidirectional();
iterator.next();
iterator.next(3);
iterator.next(5);
iterator.next();
