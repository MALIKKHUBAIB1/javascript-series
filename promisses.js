// const promisses = new Promise((resolve, reject) => {
//   // async task
//   // DB call ,cryptgraphy call ,network,
//   setTimeout(() => {
//     resolve();
//     console.log("task1");
//   }, 1000);
// });
// promisses.then(() => {
//   console.log("task is done");
// });

// const pizzaStatus = new Promise(async function (resolve, reject) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await res.json();
//   const filterUser = data.filter((user) => {
//     return (user.name = "Clementina DuBuque");
//   });
//   let pizzaIsReddy = true;
//   if (pizzaIsReddy) {
//     resolve(filterUser);
//   } else {
//     reject("Pizza is not ready");
//   }
// });

// pizzaStatus
//   .then((result) => {
//     console.log(result);
//   })
// .catch((err) => {
//   console.log(err);
// });

// const data = fetch("https://api.github.com/users/MALIKKHUBAIB1")
//   .then((res) => res.json())
//   .then((result) => console.log(result));
// console.log(data);

// async function Promis() {
//   return "hello world";
// }
// const result = Promis();
// console.log(result);

let cart = [
  {
    id: Date.now(),
    productName: "T-shrit",
    quantity: 4,
    price: 100,
    totalPrice: 0,
  },
  {
    id: Date.now(),
    productName: "T-shrit",
    quantity: 2,
    price: 100,
    totalPrice: 0,
  },
  {
    id: Date.now(),
    productName: "T-shrit",
    quantity: 10,
    price: 10,
    totalPrice: 0,
  },
];

// let promise = cartOrder(cart);
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {});

// function cartOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!cart) {
//       reject("this is not a valid cart");
//       throw new Error("cart is invalid");
//     }
//     const cartItemId = cart.map((item) => item.id);
//     const totalPrice = cart.reduce(
//       (acc, curr) => acc+curr.quantity * curr.price,
//       0
//     );
//     // console.log(totalPrice)
//     resolve({ cartItemId, totalPrice });
//   });
//   return pr;
// }

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(cart);
//   }, 5000);
//   // setTimeout(() => {
//   //   reject("p1 is rejected ");
//   // }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p2 is successfully resolved");
//   }, 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3 is successfully resolved");
//   }, 3000);
// });
// Promise.all([p1, p2, p3]).then((res) => {
//   const start = Date.now();
//   console.log(res);
//   const end = Date.now();
//   console.log(end - start);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Promise.race([p1, p2])
//   .then((res) => {
//     const totalPrice = res.reduce(
//       (acc, curr) => acc + curr.price * curr.quantity,
//       0
//     );
//     // console.log(totalPrice);
//     return totalPrice;
//   })
//   .then((totalPrice) => console.log(totalPrice))
//   .catch((err) => {
//     console.log(err);
//   });
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise is rejolved after 5000");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise is rejolved after 10000");
//   }, 10000);
// });
// async function getData() {
//   const data = await p1;
//   console.log("promise one");
//   console.log(data);
// }
// getData();

// let name = "Ritik";
// let sname = name;
// let obj = { surname: "Chauhan" };

// let myFunc = function (obj2, fname) {
//   "use strict";
//   obj2.surname = "Chauhan updated";
//   fname = "Ritik updated";
//   console.log(name)
//   // console.log(name); // ritik updated
//   console.log(obj.surname); //chauhan
// };

// myFunc(obj, name);
// console.log(obj.surname); // chauhan updated
// console.log(name); // ritik updated

// Question 2

// function getName(){}
// let func1=()=>{};
// console.log(func1());
// console.log(getName())

// let a = [1, 2, 3];
// let b = a;

// b.push(4);

// console.log(a); // same as b -> [1,2,3,4]

// console.log(b); // same as a  -> [1,2,3,4]

// b = [5, 6];
// console.log(a); // [5, 6]
// console.log(b); // [5,6]

// Question 4

// imediatly inviked function
// (function () {
//   setTimeout(() => console.log(1), 2000); // 1

//   console.log(2); // 2
//   setTimeout(() => console.log(3), 0); // 3
//   console.log(4); // 4
// })();

// 2
// 4
// 3
// 1

// Question 5

// function runFunc() {
//   console.log("1" + 1); // 11
//   console.log("A" - 1); // NAN
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78); //NAN
//   console.log("Hello" + "78");
// }
// runFunc();

// Questions 6

// const a = function () {
//   console.log(this); // global object that is equal to the its parent
//   const b = {
//     fname: "b",
//     func1: function () {
//       console.log(this.fname);
//     },
//   };
//   const c = {
//     fname: "c",
//     func2: () => {
//       console.log(this.fname);
//     },
//   };
//   b.func1();
//   c.func2();
// };
// a();
// lets  reverse a string
let str = "reverse";

// let ans = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   // console.log(str[i]);
//   ans = ans + str[i];
// }

//  console.log(ans)

// console.log(Array.from(str).reverse().join(""));
// let newArray = [1, 2, 3, 4, 5];

// let len = str.length;
// let arr = new Array();
// function pushElement(arr, ele) {
//   if (!arr) return;
//   if (ele === undefined) {
//     console.log("elemnt is not found ");
//     return;
//   }
//   arr.push(ele);
// }
// function removeElement(arr) {
//   if (arr.length <= 0) return;

//   // if (!arr) return;
//   const ele = arr.pop();

//   return ele;
// }

// for (let i = 0; i < str.length; i++) {
//   pushElement(arr, str[i]);
// }

// let ans = "";
// while (arr.length > 0) {
//   let ele = removeElement(arr);
//   ans += ele;
// }
// console.log(ans);

// Find second max element in an array

// let arr = [1, 2, 9, 3, 4];

// function findSecondMaxElement(arr) {
//   if (arr.length < 2) {
//     return "Array must have at least two elements";
//   }

//   let maxEle = -Infinity;
//   let secondMaxEle = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxEle) {
//       secondMaxEle = maxEle;
//       maxEle = arr[i];
//     } else if (arr[i] > secondMaxEle && arr[i] < maxEle) {
//       secondMaxEle = arr[i];
//     }
//   }

//   return secondMaxEle;
// }

// let secondMaxEle = findSecondMaxElement(arr);
// console.log(secondMaxEle); // Output: 5

// mark it as importannt

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((ele) => {
//   if (ele % 2 == 0) return ele;
// });
// console.log(newArr);

// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   document.getElementById("but-" + i).onclick = () => {
//     alert(arr[i]);
//   };
// }

// find the vovwell in the string

// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:

// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

// return [4,5,7,2,3]

// function rotateElemntByk(arr, k) {
//   for (let i = 0; i < k; i++) {
//     let ele = arr[arr.length - 1];
//     for (let j = arr.length - 2; j >= 0; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[0] = ele;
//   }
// }
// rotateElemntByk(element, 3);
// console.log(element);

// function rotateElement(arr, start, end) {
//   while (start < end) {
//     let fele = arr[start];
//     let lele = arr[end];
//     arr[start] = lele;
//     arr[end] = fele;
//     start++;
//     end--;
//   }
//   return arr;
// }

// const ans = rotateElement(element, 0, element.length - 1);
// const ans3 = rotateElement(element, 0, 3-1);
// const ans2 = rotateElement(element, 3, element.length - 1);
// [4, 5, 7, 2, 3];

// let element = [2, 3, 4, 5, 7];

// let k = 3;
// while (k > 0) {
//   let ele = element.shift();
//   element.push(ele);
//   k--;
// }
// console.log(element);
