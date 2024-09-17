// console.log(this); // this is global object refer to the window object-> global window

// let obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };
// window.obj.x();

// call method
//  used for sharing the method
// let student = {
//   name: "Jhon",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// let student2 = {
//   name: "Max",
// };

// student.printName.call(student2);
// "use strict";
// let obj = {
//   name: "Max",
//   printName: () => {
//     console.log(this);
//   },
// };
// obj.printName();

// let obj = {
//   name: "Alice",
//   regularFunction: function () {
//     console.log(this.name); // 'this' refers to obj, so this.name is 'Alice'
//   },
//   arrowFunction: () => {
//     console.log(this.name); // 'this' refers to the surrounding context (probably the global object)
//   },
// };

// obj.regularFunction(); // Outputs: 'Alice'
// obj.arrowFunction(); // Outputs: undefined (or an error in strict mode)

// In obj.regularFunction, this refers to obj, so this.name outputs 'Alice'.
// In obj.arrowFunction, this does not refer to obj. Instead, it refers to whatever this was in the context where obj was defined. If obj was defined globally, this might refer to the global object, and this.name could be undefined.

myFun();
let myFun = function () {
  console.log("first");
};
myFun();

function myFun() {
  console.log("second");
}
myFun();
