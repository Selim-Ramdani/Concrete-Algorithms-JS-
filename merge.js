let fs = require("fs");
let listConvertToArr;

const fileName = process.argv[2];
listConvertToArr = fs.readFileSync(fileName, "utf8");
listConvertToArr = listConvertToArr.split(" ").map((num) => parseInt(num, 10));

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const middle = array.length / 2;
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let result = [];
  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left.slice()).concat(right.slice());
};

console.log(mergeSort(listConvertToArr));
