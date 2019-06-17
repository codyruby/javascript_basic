/*
Bibliothécaire
C'est ton premier jour de stage au CDI du collège du coin. 
Tu dois aider la bibliothécaire à faire des statistiques 
dans la base de données de livres du collège 
et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.
*/

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 38 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/*
Réalise un script script_5.js qui affichera dans la console les questions suivantes 
et leurs réponses :

================================================================
Est-ce que tous les livres ont été au moins empruntés une fois ?
================================================================*/

/*
var isRented = true

for (var i = 0; i < books.length; i++) {
    var book = books[i]
    if (book.rented == 0) {
        isRented = false
        console.log("Certains livres n'ont pas été empruntés.");
        break
    } 
};

if (isRented) {
    console.log("Tous les livres ont été au moins empruntés une fois.");
};      
*/

/*================================================================
Quel est le livre le plus emprunté ?
================================================================*/



/*================================================================
Quel est le livre le moins emprunté ?
================================================================*/



/*================================================================
Trouve le livre avec l'ID: 873495 ;
================================================================*/

/*
let bookID = books.find(book => book.id === 873495);

console.log(bookID); 
*/

/*================================================================
Supprime le livre avec l'ID: 133712 ;
================================================================*/

/*
let bookForRemoveID = books.find(book => book.id === 133712);
books.splice(books.indexOf(bookForRemoveID),1);

console.log(books); 
*/

/*=========================================================================================
Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
=========================================================================================*/

/*
books.sort(function(a, b) {
    var titleA = a.title.toUpperCase(); // ignore upper and lowercase
    var titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  console.log(books);
  */