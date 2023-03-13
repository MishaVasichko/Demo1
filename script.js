// 1) Создать переменную numberofFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?

// 2) Создать обьект personalMovieDB и в него поместить такие свойства:
// - count - сюда передается ответ на первый вопрос
// - movies - в это свойство поместить пустой объект
// - actors - тоже поместить пустой объект
// - genres - сюда поместить пустой массив
// - privat - в это свойство поместить boolean (логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//  - 'Один из последних просмотренных фильмов? '
//  - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
// movies: {
//     'logan'; '8.1'
// }


// 1.
const numberofFilms = prompt('How many films have you watched?', ''); 

// 2.
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

// 3.
const a = prompt('One of the last films that you watched', ''),
      b = prompt('Give rate to the film', ''),
      c = prompt('One of the last films that you watched', ''),
      d = prompt('Give rate to the film', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);

