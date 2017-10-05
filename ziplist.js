const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];

function zipList(listA, listB) {
  const newL = [];
  for (let i = 0; i < listA.length; i++) {
    newL.push(listA[i]);
    newL.push(listB[i]);
  }
  return newL;
}

console.log(zipList(a, b));

function zipListTheSimpleWay(listA, ListB) {
  return _.flatten((_.zip(listA, ListB)));
}

console.log(zipListTheSimpleWay(a, b));
