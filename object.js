// const person = {
//   name: "clever programing",
//   channel: "clever ",
//   vieews: "2193k",
//   age: 19,
// };
// // console.log(person["age"]);
// person.phone = "11-22-333-4444";
// console.log(person);
// console.log(person.phone);

const introducer = (name, color) => {
  const person = {
    name: name,
    shirtcolor: color,
    assest: 1000000,
    liability: 500000,
    networth: function () {
      return this.assest - this.liability;
    },
  };
};
//   const intro = `my name is ${person.name} and my shirt color is ${person.shirtcolor} and my nethworth is ${person.networth()}`;
//   return intro;
// };

// console.log(introducer("Qazi", "black"));
// const arr = [1, 2, 3, 4, 5, 6];
// //this is same as for loop
// let doubleArr = [];
// for (const index of arr) {
//   console.log(index);
// }
// function double(arr) {
//   let result = [];
//   for (const ans of arr) {
//     let table = ans * 2;
//     result.push(table);
//   }
//   return result;
// }
// const arr = [1, 2, 3, 4, 5, 6];
// let doubleArr = [];

// console.log(double(arr));

//letter counter
// const letterCounter = (phrase) => {
//   let lenofPhrase = phrase.length;
//   return lenofPhrase;
// };
// let phrase = "this is best way to learn javascript";
// // console.log(pharse.length);
// console.log(letterCounter(phrase));

// const letterCounter = (phrase) => {
//   let result = 0;
//   for (const letter in phrase) {
//     result = 1 + Number(letter);
//   }
//   return result;
// };
// let phrase = "this is best way to learn javascript";
// // console.log(pharse.length);
// console.log(letterCounter(phrase));

// const sumOfArray = (arr, sum) => {
//   for (const sums of arr) {
//     sum += sums;
//   }
//   return sum;
// };
// let sum = 0;
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(sumOfArray(arr, sum));

//find max in array

// function maxs(arr) {
//   let max = arr[0];
//   for (const maxi of arr) {
//     if (maxi > max) {
//       max = maxi;
//     }
//   }
//   return max;
// }
// let arr = [1, 2, 10, 4, 5, 6];
// console.log(maxs(arr));

//calculate freqency

// function frequency(phrase) {
//   let freq = {};
//   for (const letter of phrase) {
//     if (letter in freq) {
//       freq[letter] = freq[letter] + 1;
//     } else {
//       freq[letter] = 1;
//     }
//   }
//   return freq;
// }
// console.log(frequency("malik khubaib"));

function frequency(phrase) {
  let arr = phrase.split(" ");
  let freq = {};
  for (const word of arr) {
    if (word in freq) {
      freq[word] = freq[word] + 1;
    } else {
      freq[word] = 1;
    }
  }
  return freq;
}

let phrase = "lol whats lol";
console.log(frequency(phrase));
