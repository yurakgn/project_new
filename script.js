const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while (personalMovieDB.count != null) {
    alert('Введите кол-во фильмов');
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
}
while (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
}

if (personalMovieDB.count != null) {
    alert('Введите кол-во фильмов');
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
} else if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('error');
}

for (let i = 0; i < 2; i++) {
    let films = prompt('Один из последних просмотренных фильмов?', '');
    if (films = null && )


    // while (films.length = NaN) {
    //     alert('Вы не ввели название фильма');
    //     films = prompt('Какой последний фильм вы посмотрели:', '');
    // }
    while (films.length <= 0) {
        alert('Вы не ввели название фильма');
        films = prompt('Какой последний фильм вы посмотрели:', '');
    }
    while (films.length > 10) {
        alert('Вы ввели слишком длинное название');
        films = prompt('Какой последний фильм вы посмотрели:', '');
    }
    let raitingFilms = +prompt('На сколько оцените его?', '5');
    personalMovieDB.movies[films] = raitingFilms;
}


console.log(personalMovieDB)
