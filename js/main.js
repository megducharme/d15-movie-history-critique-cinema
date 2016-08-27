"use strict";

let db = require("./db-interactions"),
  login = require("./user"),
  dom = require("./dom-builder");

function newMovieSearch(title) {
  console.log("new movie search");
  db.getNewMovie(title)
    .then(function(movieData) {

    });
}

function searchMyMovies() {

}

function deleteMyMovie() {

}

function addToList() {

}

function prepFbMoviesForDomLoad() {
  console.log("load some movies");

}

function buildNewMovieObject() {

}

function buildFbMovieObject() {

}

prepFbMoviesForDomLoad(); //this will move into the log in user event listener to run after authentication.
newMovieSearch(); //this will be removed once we get a user to log in. it is here simply to allow us to ajax call omdb.

//User Login
$("#auth-btn").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    let user = result.user;
    console.log("logged in user", user.uid);
    // loadMoviesToDOM();
  });
});

// $(".logOutUser").click(function(event) {

// });

// To-Do : Add keypress event, validate user input, clear text input
$(".findNewMovie").click(function(event) {
  console.log("search button clicked");
  var movieTitle = $(".searchInput").val();
  console.log("movieTitle: ", movieTitle);
  newMovieSearch(movieTitle);
});

$(".searchMyMovies").click(function(event) {

});

$(".showUnwatchedMovies").click(function(event) {

});

$(".showWatchedMovies").click(function(event) {

});

$(".deleteMovie").click(function(event) {

});

$(".addToWatched").click(function(event) {

});

$(".addToUnwatched").click(function(event) {

});

$(".rateMovie").click(function(event) {

});

$(".searchFilter").click(function(event) {

});

$(".moveNewMovies").click(function(event) {

});


