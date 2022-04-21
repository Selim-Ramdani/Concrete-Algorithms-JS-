// Sujet 1 - Exercice 1 : O(n2) =>
//Avec une liste de nombres entiers relatifs et un nombre k,
//crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

const arr1 = [10, 15, 3, 7];
const k1 = 17;
const arr2 = [1, 8, 10, 21];
const k2 = 19;

const twoNumsSufficient = (array, number) => {
  let exist = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const valueToDiscover = number - array[i]
      array.forEach((element) => {
        if (element === valueToDiscover) {
          exist = true;
        }
      });
    }
  }
  return exist;
};

console.log(
  `Deux nombres de arr1 (${arr1}) ont bien ${k1} (k1) comme résultat ? Réponse : ${twoNumsSufficient(arr1, k1)}`
);

console.log(
  `Deux nombres de arr2 (${arr2}) ont bien ${k2} (k2) comme résultat ? Réponse : ${twoNumsSufficient(arr2,k2)}`
);