"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

start();

function detectPersonalLevel() {
    if (personalMovieDB.count = null) {
        alert('Произошла ошибка');
        const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    } else if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else {
        alert('Вы киноман!');
    }
}


detectPersonalLevel();



function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const films = prompt('Один из последних просмотренных фильмов?', '');
        if (films != null && films.length > 0 && films.length < 50) {
            let raitingFilms = +prompt('На сколько оцените его?', '5');
            personalMovieDB.movies[films] = raitingFilms;
        } else {
            i--;
        }
    }
}

remeberMyFilms();

function writeMyGenres() {
    for (let i = 0; i < 3; i++) {
        const genresFilms = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres.push(genresFilms);
    }
}

writeMyGenres();


// let i = 0;
// while (i < 2) {
//     const films = prompt('Один из последних просмотренных фильмов?', '');
//     if (films != null && films.length > 0 && films.length < 50) {
//         let raitingFilms = +prompt('На сколько оцените его?', '5');
//         personalMovieDB.movies[films] = raitingFilms;
//         i++
//     }
// }

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

