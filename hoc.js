let arr = [3, 1, 2, 4, 12];

// function calculateAnything(arr, identifier) {
//   if (!arr || !identifier) return;
//   if (identifier === "area") {
//     return arr.map((item) => +(item * item * Math.PI).toFixed(2));
//   } else if (identifier === "dia") {
//     return arr.map((item) => item * 2);
//   } else if (identifier === "circumference") {
//     return arr.map((item) => +(2 * item * Math.PI).toFixed(2));
//   }
//   return [];
// }

// const area = calculateAnything(arr, "area");
// console.log(area);

// function oddNumber() {
//   return arr.filter((num) => num % 2 !== 0);
// }
// console.log(oddNumber());

// console.log(arr)

// const output = arr.reduce((acc, it) => {
//   if (it > acc) {
//     acc = it;
//   }
//   return acc;
// }, -1);
// console.log(output);

let user = [
  { fname: "max", lname: "millian", age: 35 },
  { fname: "jhon", lname: "doe", age: 23 },
  { fname: "elon", lname: "musk", age: 65 },
  { fname: "donald", lname: "trump", age: 23 },
];

// console.log(user.map((user) => user.fname + " " + user.lname));
// console.log(user.filter((user) => !user.age));

let output = user.reduce((acc, curr) => {
  if (curr.age < 30) {
    return [...acc, curr.fname];
  }
  return acc
}, []);
console.log(output);
