// what is callback function in javascript
// setTimeout(() => {
//   console.log("setTimeout");
// }, 2000);

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function () {
//   console.log("y");
// });
// console.log("hello world");

// let a = 5;
// let b =a++;
// let c = a+b;
// console.log(c)
console.log("start");
setTimeout(() => {
  console.log("callback function");
}, 3000);

let count = 0;
const timer = setInterval(() => {
  count++;
}, 1000);

let stime = new Date().getTime();
let endtime = stime;
while (endtime < stime + 10000) {
  endtime = new Date().getTime();
}
console.log("end");
