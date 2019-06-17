/*
Analyses de données:

Startup Nation:
Tu es en train d'écrire un livre sur les entrepreneurs américains 
et tu te renseignes sur leurs dates de naissance pour voir si tu ne peux pas identifier 
un millésime à succès.

Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus 
et leurs dates de naissance.

*/
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/*============================================================
Réalise un script script_4.js qui affichera dans la console les questions suivantes 
et leur réponses :

Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
============================================================*/

/*
let entrepreneursYear = entrepreneurs.filter(person => /^197\d$/.test(String(person.year)))

console.log(entrepreneursYear); 
*/

/*============================================================
Sors une array qui contient le prénom et le nom des entrepreneurs ;
============================================================*/

/*
let entrepreneursFirstAndLastName = entrepreneurs.map(function(person) {
    return person.first + " " + person.last;
});

console.log(entrepreneursFirstAndLastName); 
*/

/*============================================================
Quel âge aurait chaque inventeur aujourd'hui ?
============================================================*/

/*
let entrepreneursAgeToday = entrepreneurs.map(function(person) {
    return "Age en 2019: " + person.first + " " + person.last + " à " + `${2019 - person.year}` + "ans.";
});

console.log(entrepreneursAgeToday); 
*/

/*==============================================================
Trie les entrepreneurs par ordre alphabétique du nom de famille.
==============================================================*/

entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : -1); 
console.log(entrepreneurs);



