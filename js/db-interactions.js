"use strict";

//this imports needed variables from other areas of the project.
let firebase = require("./api-config");
var userMovie = getMovieTitle();
let Handlebars = require("hbsfy/runtime");

// To-Do: add .fail reject error messages
//gets user movies from the firebase database
function getUserMovies(userId) {
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `https://movie-history-project-c7181.firebaseio.com/
/movies.json?orderBy="user"&equalTo="${userId}"`
    }).done(function(myMovieData){
      resolve(myMovieData);
      // thom- added fail reject user messages/////////////////
      }).fail(function(error){
    reject(error);
  });
});
// end of promise
}


function getWatchedMovies(callback) {
  return new Promise(function(resolve, reject){
    $.ajax({
      url: 'https://movie-history-e8f3d.firebaseio.com/movies.json'
    }).done(function(movieData){
      resolve(movieData);
    });
  });
}

//this function pushes new movie objects to the firebase database
function addMovieToFb(movieFormObj) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: 'https://movie-history-project-c7181.firebaseio.com/movies.json',
      type: 'POST',
      data: JSON.stringify(movieFormObj),
      dataType: 'json'
    }).done(function(movieId) {
      resolve(movieId);
    });
  });
}

//this function deletes the chosen movie from the user's database on firebase
function deleteMovieFromFb(movieId) {
  console.log("movieId", movieId);
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `https://movie-history-project-c7181.firebaseio.com/${movieId}.json`,
      type: 'DELETE'
    }).done(function(data) {
      resolve(data);
    });
  });
}


// Gets movie object from OMDb
function getNewMovie(movieTitle) {
  return new Promise(function(resolve, reject){
 $.ajax({
      url: "http://www.omdbapi.com/?s="+movieTitle+"&y=&plot=short&r=json",
      method: "GET",
      data: JSON
    }).done(function(movieData){
      console.log("movieData", movieData);
      // resolve(movieData);
      movieList(movieData);
    }).fail(function(error) {
      reject(error);
    });
  });
}

//this function gets the movie's title from the input field
function getMovieTitle() {
  var inputMovie = $("#movieTitle").val();
  return inputMovie;
}

//this function edits the movie, adding the rating, then sends that edit to the firebase database
function rateMovie(movieFormObj, movieId) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `https://movie-history-project-c7181.firebaseio.com/movies/${movieId}.json`,
      type: 'PUT',
      data: JSON.stringify(movieFormObj)
    }).done(function(data) {
      resolve(data);
    });
  });
}
function movieList(movieData) {
      let outputString = "";

    for (let i = 0; i < movieData.Search.length; i++) {
      // console.log("movieData yona", movieData.Search[i].Title);
          let Title = movieData.Search[i].Title,
              year = movieData.Search[i].Year,
              Type = movieData.Search[i].Type,
              poster = movieData.Search[i].Poster,
              Id = movieData.Search[i].imdbID;

               outputString += `
<div class="col s3 card movies vertical">
  <div class="card-image">
    <img src="${poster}" width="170" height="250">
  </div>
    <div class="card-content">
      <ul>
        <li>Title:${Title}</li>
        <li>Release Date:${year}</li>
        <li>Starring: ${"Actors"}</li>
        <li>rating: ${"4"}</li>
      </ul>
    </div>
  <div class="row col card-action">
    <a class="add-to-watch" href="#">Add to watch</a>
    <a class="add-to-seen-list" href="#">Watched</a>
    <button class="delete" type="submit" value="Delete">Delete</button>
  </div>
</div>`;
 }
$("#output").append(outputString);
}
//this exports our functions so they can be used in other functions in this project
module.exports = {
  getUserMovies,
  getWatchedMovies,
  addMovieToFb,
  getMovieTitle,
  getNewMovie,
  movieList,
  deleteMovieFromFb,
  rateMovie
};
