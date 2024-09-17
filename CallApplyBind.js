// const modules = {
//   x: 42,
//   getX: function () {
//     console.log(this.x);
//     return this.x;
//   },
// };

// const unboundGetX = modules.getX;
// console.log(unboundGetX);
// console.log(unboundGetX()); // The function gets invoked at the global scope so this contex is cahange so it refers to the global object now it is undefined now

// Expected output: undefined
// so we can solve this using the bind method
// const boundGetX = unboundGetX.bind(modules);
// console.log(boundGetX())
// console.log(boundGetX());

//2
// let multiply = function (x, y, z) {
//   console.log(x, y, z);
//   console.log(2 * 2);
//   return x * 2;
// };

// exacly same as the below function
// var mul2 = function(y){
// let x = 2;
// console.log(x*2);
// }
// bind method will create the new copy of the function and bind with the context of the orignal function or binded functon
// const mul2 = multiply.bind(this, 2);
// console.log(mul2(2, 4));
