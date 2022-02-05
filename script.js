"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    remeberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const films = prompt('Один из последних просмотренных фильмов?', '');
            if (films != null && films.length > 0 && films.length < 50) {
                let raitingFilms = +prompt('На сколько оцените его?', '5');
                this.movies[films] = raitingFilms;
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel() {
        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            alert('Вы классический зритель')
        } else if (this.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },

    toggleVisibleMyDB() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },

    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            const genresFilms = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genresFilms != null && genresFilms.length > 0) {
            this.genres.push(genresFilms);
            } else {
                console.log('error');
                i--;
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр # ${i + 1} - ${item}`);
        });
    },
};

personalMovieDB.start();
personalMovieDB.remeberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();




console.log(personalMovieDB);


