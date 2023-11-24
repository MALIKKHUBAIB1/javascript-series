//map
//filter
// and reduce and find method in js

// let arr = [];
// let num = 10;
// for (let i = 1; i <= num; i++) {
//   arr.push(i);
// }
// function double(arr) {
//   return arr.map((val) => {
//      return val * 2;
//   });
// }
// console.log(double(arr));

// filter number greater than 10;
// filter loop and return new array with all values
// function graterThanFive(arr, num) {
//   const result = arr.filter((val) => {
//     return val > num;
//   });
//   return result;
// }
// console.log(graterThanFive(arr, 6));

// let actors = [
//   { name: "jhonny ", networth: 200000000 },
//   { name: "amber", networth: 20 },
//   { name: "fred", networth: 10000000 },
//   { name: "leonardo", networth: 10002345 },
//   { name: "max", networth: 2123233 },
// ];

// for (const actor of actors) {
//   console.log(actor);
// }
// let netWorth = actors.map((actor) => {
//   console.log(actor.networth);
// });

// let filtered = actors.filter((actors) => {
//   return actors.networth > 30;
// });
// let result = filtered.map((actor) => {
//   let actorVar = actor.name;
//   return actorVar;
// });
// console.log(result.join(","));
// // console.log(filtered);

//reduce Mthod
// sum all of the networth
// if sum  think reduce
// reduce take a function as an argument
//reduce loop and give you back the accumulator
let actors = [
      { name: "jhonny ", networth: 1 },
      { name: "amber", networth: 2},
      { name: "fred", networth: 3 },
      { name: "leonardo", networth: 4 },
      { name: "max", networth: 5 },
    ];
    
let netSum = actors.map((acc) => {
  return acc.networth;
});
// console.log(netSum);
// let nums = [1, 2, 3, 4, 5];
const result = netSum.reduce((acc, cur) => {
  return acc * cur;
});
console.log(result);
