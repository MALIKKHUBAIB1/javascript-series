// const div = document.getElementById("div");
// const btn = document.getElementById("btn");
// const btn1 = document.getElementById("btn1");

// div.addEventListener("click", () => {
//   console.log("div is clicked");
// });

// btn.addEventListener("click", (e) => {
//   console.log("btn is clicked");
// });

// btn1.addEventListener("click", (e) => {
//   e.stopImmediatePropagation();
//   console.log("btn1 is clicked");
// });

// btn1.addEventListener("click", () => {
//   console.log("btn2 is clicked");
// });

// let arr = [1, 2, 3, 4];
// let obj = {
//   name: "malik khubaib ",
//   rollNo: 21,
//   classId: "2312i3u21",
//   add: "cksmksk",
// };
// for (let key of arr) {
//  console.log(key);
// }
// const newArr = arr.map((element) => {
//   return element * 2;
// });
// console.log(newArr)
// console.log(arr)
// for (let key of arr) {
//   console.log(`${key} is ${arr[key]}`);
// }

// let sym1 = Symbol("malik khubaib");
// console.log(sym1);
// let a = [];
// let b = [];
// let c = a;
// console.log(c === a);

// console.log(null ==undefined)// loose equality first it will convert into the undefined and then compare
// let a;
// console.log(a='5');
// console.log(a)

// let arr = [5, 6, 7, 8, 9];
// let str = "array";
// console.log(Array.from(str));
// const newArr = arr.copyWithin(1, 2, 5);
// console.log(newArr);

let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

// function findColors(color) {
//   let newArr = cars.findIndex((car) => {
//     return car.color === color;
//   });
//   return newArr;
// }
// console.log(findColors("purple"));

// let list = arr.entries();

// // for (let i of list) {
// //   console.log(i);
// // }
// // console.log(typeof arr);
// console.log(arr.map((item) => item * 2));

// let obj = {
//   color: "red",
//   type: "station wagon",
//   registration: new Date("2018-03-03"),
//   capacity: 5,
// };

// console.log(Object.keys(obj));
// let list = Object.keys(obj);
// for (let i of list) {
//   console.log(obj[i]);
// }

// const names = "khubaib malik";
// const isNameValid = arr.lastIndexOf(3);
// console.log(isNameValid)

// function searchByValue(value) {
//   if (!value) return;
//     const filerArry = cars.filter((car) => car.color.includes(value));
//     return filerArry;

// }

// console.log(searchByValue("p"));

let arr = [1, 2, 3, 4];
// const fele = arr.shift();
// console.log(fele);

// console.log([..."man"]);
// function display(...man) {
//   let ans = 1;
//   for (let i of man) {
//     ans *= i;
//   }
//   console.log("Product = " + ans);
// }

// display(4, 2, 3);

// function display() {
//   // let i;
//   for (let i = 0; i < 4; i++) {
//     console.log(i);
//   }
//   console.log(i, "outside");
// }
// display();

// const result = arr.reduce((acc, it, i) => {
//   return { ...acc, [i]: it };
// }, {});
// console.log(result);
// let obj = { 0: "1", 1: "2", 2: "3", 3: "4" };
// let result = [];
// Object.values(obj).map((val) => result.push(val));
// console.log(result);

// function display(...man) {
//   let ans = 1;
//   for (let price of man) {
//     ans *= price.price;
//     // console.log()
//   }
//   var a = "malik";
//   console.log("Product = " + ans);
// }
// display({ price: 10 }, { price: 10 }, { price: 10 });
// console.log(a)

// one(5);
// function one(num) {
//   return num + 1;
// }
// two(2);
// const two = function (num) {
//   return num + 2;
// };

// const user = {
//   username: "max",
//   website: "xyz",
//   addOn: function () {
//     // console.log(`User = ${this.username} and website = ${user.website}`);
//     console.log(this);
//   },
// };
// user.addOn();
// console.log(this)
// user.website = "new-user";
// user.addOn();
// window.user = "baap bolte hai";
// const chai = () => {
//   let user = "user";
//   console.log(this.user);
// };
// chai();

// (function chai() {
//   console.log("max he user ");
// })();

// const obj = {
//   value: 1,
//   increment: function () {
//     this.value++;
//     console.log(this.value);
//   },
// };
// const increment = obj.increment;
// console.log(increment);
// obj.increment();
// increment();
// let obj = { name: "user" };
// let user = [...arr, 9, 0, { ...obj }];

// for (let i = 0; i < user.length; i++) {
//   if (typeof user[i] === "object") {
//     console.log(user[i].name);
//   }
// }

// const [one, two] = user;
// console.log(one, two);

// let ans = [2, 1, 2];
// let newarr = new Array(ans.length).fill(0);
// console.log(newarr);
// for (let i = 0; i < ans.length; i++) {
//   newarr[i]++;
// }

// let max = -1;
// for (let key in newarr) {
//   console.log(key);
//   if (max < key) {
//     max = key;
//   }
// }
// console.log(max);

// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United state of america ");
// map.set("ch", "China");

// for (const [key, value] of map) {
//   console.log(key, value);
// }
// console.log(value);

// console.log(x);
// getName();
// getName2();
// var x = 3;
// var getName2 = () => {
//   console.log("name2");
// };
// function getName() {
//   console.log("myname");
// }



function name() {
  return console.log("one")
} function name1() {
  return console.log("two")
} 
console.log("one")||name1();
