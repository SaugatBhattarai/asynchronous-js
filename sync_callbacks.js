/**
 * SYNC CALLBACKS
 *
 * ASYNC in one line: start now and finish up later
 */
//callback function (synchronous)

function callback(val) {
  console.log(val);
}

window.onload = function () {
  var fruits = ["banana", "apple", "pear", "orange", "ground apple"];
  //   fruits.forEach(function (fruit) {
  //     console.log(fruit);
  //   });

  fruits.forEach(callback);
  console.log("synchronous callbacks executes after foreach");
};
