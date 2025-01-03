// print 5 times names
// let count = 0;
// function print() {
//   if (count === 5) {
//     return;
//   }
//   count++;
//   console.log("Jhon Doe");
//   print();
// }
// print();

// print 1 to n

// function print(n) {
//   if (n === 0) {
//     return;
//   }
//   let ans = print(n - 1);
//   console.log(ans);
// }

// print(10);

let num = "23";

const newMap = new Map();

function countEvent(num) {
  let count = 0;
  let len = num.length;
  let tempNum = num; // Copy of num to work with

  while (len > 0) {
    let digit = parseInt(tempNum) % 10;
    if (digit !== 0 && parseInt(num) % digit == 0) {
      count++;
    }
    // Logging each digit
    newMap.set(digit, digit);
    tempNum = Math.floor(tempNum / 10); // Update tempNum for the next iteration
    len--;
  }
  return count;
}

let ans = countEvent(num);
console.log(newMap);
console.log(ans);

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// console.log(fruits)
