'use strict';
const numberOfFilms = +prompt("How many film do you movie");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const oneFilmFromOfTheList = prompt("One film which do you watched");
const priceOfFilm = prompt("price of film");

personalMovieDB.movies[oneFilmFromOfTheList] = priceOfFilm;
console.log(personalMovieDB);