// can use ASQ framework for channel
// var ch = chan();

// function* process1() {
//   yield put(ch, "hello");
//   var msg = yield take(ch);
//   console.log(msg);
// }

// function* process2() {
//   var greeting = yield take(ch);
//   yield put(ch, greeting + " World");
//   console.log("done!");
// }

// // Hello World
// // done

// event-channel
function fromEvent(el, eventType) {
  var ch = csp.chan();
  $(el).bind(eventType, function(evt) {
    csp.putAsync(ch, evt);
  });
}

csp.go(function*() {
  var ch = fromEvent(el, "mousemove");
  while (true) {
    var evt = yield csp.take(ch);
    console.log(evt.clientX + "," + evt.clientY);
  }
});
