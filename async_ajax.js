/**
 * AJAX REQUESTS
 *
 * 1. Communicate with a server by making a http request
 * 2. No need to reload the page
 * 3. Stands for:
 *      Asynchronous JavaScript and XML
 * eg. update maps on the fly
 *
 *XML - data we are retrieving , now JSON instead of json
 */

/**
 * READY STATES
 * 0 - request not initialized
 * 1 - request has been set up
 * 2 - request has been sent
 * 3 - request is in process
 * 4 - request is complete
 */

// TWO ways of doing one is vanilla js and other jquery
//==============================================================
// METHOD 1: BY VANNILLA JS METHOD
window.onload = function () {
  var http = new XMLHttpRequest();
  url = "data/tweets.json";

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      console.log(
        "Display readyState 4 and status 200",
        JSON.parse(http.response)
      );
    }
  };

  //1. open method
  http.open("GET", url, true); //try changing to false and see console output order to check synchronous

  //2. go out and grab the data
  http.send();
  //this thread is passed outside this thread to carry on other instruction

  //3. data is retrived
  // console.log("response data", http.response);
  console.log("test async");

  //=================================================================
  //METHOD 2: BY JQUERY METHOD
  console.log("JQUERY METHODS");
  // callback function is fires after data is received which is async behaviour
  // callback function takes data as parameter
  $.get("data/tweets.json", function (data) {
    console.log(data);
  });

  console.log("test async jquery");
};
//=================================================================
