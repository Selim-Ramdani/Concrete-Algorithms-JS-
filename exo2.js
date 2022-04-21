// Sujet 2 - Exercice 1 : O(n2) =>
// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest.
// Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins
// un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

const arr1 = [3, 7, 8, 3, 6, 1];
const arr2 = [1, 4, 5, 8];

const checkView = (array) => {
  let sunsetView = [];
  for (let i = 0; i < array.length; i++) {
    let iIsHighest = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) iIsHighest = false;
    }
    if (iIsHighest === true) sunsetView.push(array[i]);
  }
  return sunsetView;
};

console.log(
  `Selon la liste ${arr1} => Appart(s) avec vue sur le soleil couchant : (${checkView(arr1)})`
);
console.log(
  `Selon la liste ${arr1} => Appart(s) avec vue sur le soleil couchant : (${checkView(arr2)})`
);
