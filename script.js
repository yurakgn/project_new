const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.count = numberOfFilms;

const lostFilmShow = prompt('Какой последний фильм вы посмотрели:', '');
const raitingFilms = +prompt('Оцените фильм от 0 до 10', '5');
const lostFilmShow2 = prompt('Какой последний фильм вы посмотрели:', '');
const raitingFilms2 = +prompt('Оцените фильм от 0 до 10', '5');


personalMovieDB.movies[lostFilmShow] = raitingFilms;
personalMovieDB.movies[lostFilmShow2] = raitingFilms2;

console.log(personalMovieDB)


