/**
 * From The Net ninja youtube channel
 * Link: https://www.youtube.com/watch?v=QRq2zMHlBz4&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH&index=3
 *
 * ASYNC CALLBACKS
 *
 * ASYNC in one line: start now and finish up later
 */
//callback function (asynchronous)

window.onload = function () {
  function cb(data) {
    // console.log(data);
  }

  //inline callbacks
  // $.get("data/tweets.json", function (data) {
  //   console.log(data);
  // });
  $.get("data/tweets.json", cb);

  // console.log("async test ...");
};

// ==================================================================================
// CALLBACK HELL
console.log("CALLBACK HELL");

window.onload = function () {
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: cbTweets,
    error: handleError,
  });
};

function handleError(jqXHR, textStatus, error) {
  console.log(error);
}

function cbTweets(data) {
  console.log(data);
  $.ajax({
    type: "GET",
    url: "data/friends.json",
    success: cbFriends,
    error: handleError,
  });
}

function cbFriends(data) {
  console.log(data);
  $.ajax({
    type: "GET",
    url: "data/videos.json",
    success: function (data) {
      console.log(data);
    },
    error: handleError,
  });
}
