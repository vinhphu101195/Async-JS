// function  *main(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// var it = main();

// it.next(); // {value :1 , done: false}
// it.next();// {value :2 , done: false}
// it.next();// {value :3 , done: false}

// it.next();// {value :undefined , done: true}

function coroutine(g) {
  var it = g();
  return function() {
    return it.next.apply(it, arguments);
  };
}

// var run = coroutine(function *(){
//     var x   = 1 + (yield);
//     var y = 1 + (yield);
//     yield( x + y);
// });

// run();
// run(10);
// console.log("Meaning of life: " + run(30).value);

function getData(d) {
  setTimeout(function() {
    run(d);
  }, 1000);
}

var run = coroutine(function*() {
  console.log("start");

  var x = 1 + (yield getData(10));
  var y = 1 + (yield getData(14));
  var ans = yield getData("ans: " + (x + y));
  console.log(ans);
});

run();
