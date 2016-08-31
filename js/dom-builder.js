"use strict";

let userMovieTemplate = require('../templates/movies/userMovies.hbs');
let Handlebars = require("hbsfy/runtime");

function populateUserMovies(fbmovieData) {
    console.log("I'll populate the user's movies from FB", fbmovieData);
    $("#movieOutput").html("");
      // $("#movieOutput").html("Your movies are:",userMovieTemplate(fbmovieData));
      fbmovieData.forEach(function(movie) {
    $("#movieOutput").append(`
<div class="col s5 card movies horizontal">
  <div class="card-image">
    <img src="http://lorempixel.com/100/190/nature/10">
  </div>
    <div class="card-content">
      <ul>
        <li>Title:${movie.Title}</li>
        <li>Release Date:${movie.Release}</li>
        <li>Starring: ${movie.Actors}</li>
        <li>rating: ${"5"}</li>
      </ul>
    </div>
  <div class="row col card-action">
    <a  class="addToUnwatched" href="#">Add this to your unwatched list</a>
    <a class="addToWatched add-to-seen-list" href="#">Watched</a>
    <button type="submit" value="Delete">Delete</button>
  </div>
</div>`);
  });
}

// Create a movie card to display in the DOM
// function populateNewMovie(movie, movieId){
//   console.log("I'll put this into the DOM ", movie);
//   // $(".movieOutput").html(`<h2>${newMovieObj.movieTitle}</h2><h4>${newMovieObj.movieYear}</h4><h4>${newMovieObj.movieActors}</h4><button class="addToUnwatched">Add this to your unwatched list</button><button class="addToWatched">add this to your already watched list</button>`);
// return new Promise(function (resolve, reject) {
//     let movieItem = {
//       title: movie ? movie.title : "",
//       release: movie ? movie.release : "",
//       actors: movie ? movie.actors : "",
//       formTitle: movie ? `Rate "${movie.title}"` : "Add a new movie",
//       btnText: movie ? "save changes" : "save movie",
//       btnId: movie ? "save_edit_btn" : "save_new_btn"
//     },
//     form =
//       `<h3>${movieItem.formTitle}</h3>
//       <input type="text" id="form--title" placeholder="title" value="${movieItem.title}"></input>
//       <input type="text" id="form--release" placeholder="release" value="${movieItem.release}"></input>
//       <input type="text" id="form--actors" placeholder="actors" value="${movieItem.actors}"></input>
//       <button id="${movieId}" class=${movieItem.btnId}>${movieItem.btnText}</button>`;
//     resolve(form);
//   });
// }

module.exports = {populateUserMovies};
