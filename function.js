// function myName(argument) {
//   console.log(argument);
// }
// const name = "malik khubaib";
// myName(name);

function sum(food, tipAmount) {
  // const sum = a + b;
  // return sum;
  sum = food + tipAmount;
  return sum;
}
//  num1 = sum(5, 4);
// console.log(num1);

//claculate tip
function claculateFoodToata(food, tip) {
  const tippercent = tip / 100;
  tipAmount = 100 * tippercent;

  const total = sum(food, tipAmount);
  return total;
}
console.log(claculateFoodToata(40, 30));
