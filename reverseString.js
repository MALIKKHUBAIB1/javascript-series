
const str = "hello word";

// const arr = [1, 2, 3, 4];
const arr = str.split(" ").map((element) => {
  return element.split("").reverse().join("");
});
// arr.reverse();
console.log(arr.join(" "));
