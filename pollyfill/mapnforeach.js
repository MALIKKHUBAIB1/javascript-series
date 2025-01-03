// pollyfill for map and filter
const arr = new Array(1, 2, 3, 4, 5, 6);
// console.log(arr);
// function callback(ele, i, arr) {
//   console.log(ele, "element");
//   // console.log(i, "index");
//   // console.log(arr, "array");
// }
// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i] * 2, i, this);
//   }
// };
// arr.myForEach(callback);
// console.log(arr)

//pollyfill for the map
// function cb(ele, i, arr) {
//   return ele * 2;
// }
// Array.prototype.mapPollyfill = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, arr));
//   }
//   return newArr;
// };
// const newArr = arr.mapPollyfill(cb);
// console.log(newArr);

// pollyfill for filter

// Array.prototype.filterMethod = function (cb) {
//   let newArr = new Array();
//   for (let index = 0; index < this.length; index++) {
//     const element = this[index];
//     if (cb(element) && index && this) {
//       newArr.push(cb(element, index, element));
//     }
//   }
//   return newArr;
// };
// const filterdArray = arr.filterMethod((ele) => {
//   if (ele >= 4) {
//     return ele;
//   }
// });
// console.log(filterdArray);

// pollyfill for the reduce function

// how reduce function works
// const val = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(val);
// function cb(currVal, acc) {
//   return currVal + acc;
// }
// Array.prototype.myReduce = function (cb, value) {
//   let val = value;
//   for (let i = 0; i < this.length; i++) {
//     val =  cb(this[i], val);
//   }
//   return val;
// };

// const ans = arr.myReduce(cb, 0);
// console.log(ans);

// flatten an object

// let input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

let input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

function flatten(input, round) {
  if (!Array.isArray(input)) return input;

  let result = [];
  input.forEach((val) => {
    if (round > 0 && Array.isArray(val)) {
      let ans = flatten(val, round - 1);
      ans.forEach((innerVal) => result.push(innerVal));
    } else {
      result.push(val);
    }
  });
  return result;
}
const result = flatten(input, 1);
console.log(result);
