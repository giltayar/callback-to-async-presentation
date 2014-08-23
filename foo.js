var $__2 = $traceurRuntime.initGeneratorFunction(promisesPromisesPromises),
    $__3 = $traceurRuntime.initGeneratorFunction(bidirectional);
var fs = require('fs');
function promisesPromisesPromises() {
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = 2;
          return ctop(fs.writeFile)("a-file.txt", "some text");
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return ctop(fs.writeFile)("another-file.txt", "some other text");
        case 6:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__2, this);
}
function bidirectional() {
  var content;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = 2;
          return ctop(fs.readFile)("a-file.txt");
        case 2:
          content = $ctx.sent;
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return ctop(fs.writeFile)("another-file.txt", content);
        case 6:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__3, this);
}
var bidirectionalIterator = bidirectional();
bidirectionalIterator.next().value.then(function(readContent) {
  console.log("@@@GIL read=", readContent.toString());
  return bidirectionalIterator.next(readContent).value;
}).then(function() {
  process.exit(0);
});
function ctop(func) {
  return function() {
    for (var args = [],
        $__0 = 0; $__0 < arguments.length; $__0++)
      $traceurRuntime.setProperty(args, $__0, arguments[$traceurRuntime.toProperty($__0)]);
    return new Promise(function(fulfill, reject) {
      args.push(function(err) {
        for (var resultArgs = [],
            $__1 = 1; $__1 < arguments.length; $__1++)
          $traceurRuntime.setProperty(resultArgs, $__1 - 1, arguments[$traceurRuntime.toProperty($__1)]);
        if (err)
          reject(err);
        else {
          fulfill.apply(null, $traceurRuntime.spread(resultArgs));
        }
      });
      func.apply(null, $traceurRuntime.spread(args));
    });
  };
}
