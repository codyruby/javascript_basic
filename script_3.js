/*
Pyramide de Mario:

Voici ce que devra afficher la console :

"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
#####
*/

function createHalfPyramid (n) {
  
    for (var i = 1; i <= n; i++) {
      var row = '';
      
      for (var j = 1; j <= (n - i); j++) {
        row += ' ';
      }
      
      for (var k = 1; k <= i; k++) {
        row += '*';
      }
      
      console.log(row);
    }
  }
  
  console.log(createHalfPyramid(n = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))));

