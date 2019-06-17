/* 
Créé un script script_2.js qui définira la fonction factorielle et
qui calculera la factorielle du nombre entré par l'utilisateur. Petit exemple rapide : factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1
*/

function factorial(num) {
    
    if (num === 0 || num === 1)
      return "Le résultat est: " + 1;
    
    for (var i = num - 1; i >= 1; i--) {
 
      num = num * i; // ou num *= i;

    }
    return "Le résultat est: " + num; 
  }


console.log(factorial(n = parseInt(prompt("De quel nombre veut tu calculer la factorielle ?"))));
