// window.onload = function () {
//   function* gen() {
//     var x = yield 10;
//     var y = yield 20;
//     console.log("value of x and y", x, y);
//   }

//   //prepares for the exectution
//   var myGen = gen();
//   //executes x
//   console.log(myGen.next());
//   //executes y
//   console.log(myGen.next());
//   //finishes the function {done: true}
//   console.log(myGen.next(50));
// };

// /**
//  *
//  * {value: 10, done: false}
//  * {value: 20, done: false}
//  * {value: undefined, done: true}
//  *
//  */

window.onload = function () {
  genWrap(function* () {
    var tweets = yield $.get("data/tweets.json");
    console.log(tweets);

    var friends = yield $.get("data/friends.json");
    console.log(friends);

    var videos = yield $.get("data/videos.json");
    console.log(videos);
  });

  function genWrap(generator) {
    var gen = generator();

    function handle(yielded) {
      if (!yielded.done) {
        yielded.value.then(function (data) {
          return handle(gen.next(data));
        });
      }
    }
    return handle(gen.next());
  }
};
