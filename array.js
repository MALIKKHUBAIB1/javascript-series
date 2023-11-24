const name = "malik";
const groceries = ["banana", "fruit", "orange", "apple"];
// groceries.push(name);
// console.log(groceries);

// rinting thoruh the loop;
// for (let index = 0; index < groceries.length; index++) {
//   const element = groceries[index];
//   console.log(element);
// }

// let index = 0;
// while (index < groceries.length) {
//   let elements = groceries[index];
//   console.log(elements);
//   index++;
// }

// console.log(groceries.indexOf("orange"));

// groceries.find((ele) => {
//   if (ele === "orange") {
//     console.log(ele);
//   } else {
//     console.log("not found");
//   }
// });
const arr = [1, 2, 30, 10, 20];

const found = arr.find((e) => {
return e==10
});
console.log(found)