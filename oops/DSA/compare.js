// given two array and create a new function that compare and let's user know whether the two array contain any common items or not

// not a good approach
// big(n^2)

// function compare(arr1, arr2) {
//   for (var i = 0; i < arr1.length; i++) {
//     for (var j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return "true";
//       }
//     }
//   }
//   return "false";
// }
// const arr1 = ["a,", "b", "c", "x"];
// const arr2 = ["z", "y", "1"];
// Bad Approch
// function compare(a, b) {
//   const ans = a.some((item) => (b.includes(item) ? "true" : "false"));
//   return ans;
// }
// the  idea that i thought is push the one array to the hash table and compare the array to this
function compare(a, b) {
  let hash = {};
  for (let item of a) {
    hash[item] = 1;
  }
  
  for (let item of b) {
    if (hash[item]) {
      return "true";
    }
  }
  return false;
}
const arr1 = ["a,", "b", "c", "x"];
const arr2 = ["z", "y", "x"];
const ans = compare(arr1, arr2);
console.log(ans);
