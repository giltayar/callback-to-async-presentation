var $__2 = $traceurRuntime.initGeneratorFunction(firstThreeNumbers);
function firstThreeNumbers() {
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          console.log("yielding 1");
          $ctx.state = 14;
          break;
        case 14:
          $ctx.state = 2;
          return 1;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          console.log("yielding 2");
          $ctx.state = 16;
          break;
        case 16:
          $ctx.state = 6;
          return 2;
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 8;
          break;
        case 8:
          console.log("yielding 3");
          $ctx.state = 18;
          break;
        case 18:
          $ctx.state = 10;
          return 3;
        case 10:
          $ctx.maybeThrow();
          $ctx.state = 12;
          break;
        case 12:
          console.log("done-ing");
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__2, this);
}
function firstThreeNumbers() {
  return {
    i: 0,
    next: function() {
      ++this.i;
      if (this.i <= 3)
        return {
          done: false,
          value: this.i
        };
      else
        return {done: true};
    }
  };
}
for (var $__0 = firstThreeNumbers()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__1; !($__1 = $__0.next()).done; ) {
  var i = $__1.value;
  console.log(i);
}
