// function randomNumber(arr) {
//   const rand = Math.floor(Math.random() * arr.length);
//   const result = arr[rand];
//   return result;
// }
// const arr = [1, 2, 4, 5, 6];

// console.log(randomNumber(arr));
// //baby game

const whetherCast = (whether) => {
  let score;
  if (whether === "rainy") {
    score = 1;
  } else if (whether === "sunny") {
    score = -1;
  } else {
    score = 0;
  }
  return score;
};
let whether = ["rainy", "sunny", "overcast"];
let randomCast = Math.floor(Math.random() * whether.length);
let newWhtwerCast = whether[randomCast];
console.log(whetherCast(newWhtwerCast));
