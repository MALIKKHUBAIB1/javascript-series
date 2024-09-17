// this.name1 = "khubaib";
// const getName = () => {
//   let name1 = "malik";
//   console.log(this.name1);
//   console.log(this)
// };
// getName();
// console.log(this)

// console.log(a);
// const a = 7;

// array basic method
//   length // give you the lenght of the array;
//   toString() // convert to string
//   at()
//   join() // it is seprator used to convert to string and join with sepecific seprator
//   pop()  // used to remove one from the array at the end
//   push()  // add one to the array at the end
//  shift() // remove one from the array at the begining
//   unshift() //add one to the array at the begining
//   delete() // remove one from the array
//   concat() // used for concatenation or join two arrays
//   copyWithin()
//   flat()
//   splice() // splice return remove value only
//   toSpliced()
//   slice() // it return new array

// array search method

//  indexOf()
//  lastIndexOf()
//  includes()

//  find()
//  findIndex()
//  findLast()
//  findLastIndex()

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let obj = [
  {
    id: 1,
    fname: "malik",
    city: "dganj",
    date: "2015-12-4",
    pass: true,
  },
  {
    id: 2,
    fname: "jhon",
    city: "delhi",
    date: "2020-2-1",
    pass: false,
  },
  {
    id: 3,
    fname: "max",
    city: "USA",
    date: "2020-12-1",
    pass: true,
  },
  {
    id: 4,
    fname: "manu",
    city: "jai pur",
    date: "2015-4-4",
    pass: false,
  },
];

// find index where city is delhi

// function filterBasedonDate(userDate) {
//   const nudate = new Date(userDate).toISOString().split("T")[0];
//   console.log(nudate);

//   const udate = new Date(userDate);
//   const umonth = udate.getMonth();
//   const uday = udate.getDate();
//   const uyear = udate.getFullYear();
//   const newObj = obj.filter((item) => {
//     const date = new Date(item.date);
//     const month = date.getMonth();
//     const day = date.getDate();
//     const year = date.getFullYear();
//     const isDateValid = month === umonth && year === uyear && day === uday;
//     return isDateValid;
//   });
//   return newObj;
// }
// console.log(filterBasedonDate("2015-4-4"));
// function fndIndex() {
//   let indexofCity = obj.findIndex((item) => item.city === "delhi");
//   return indexofCity;
// }
// const isPassed = obj.filter((item) => item.pass);
// console.log(isPassed);
// let indexofele = fndIndex();

// if (!indexofele || indexofele === -1) console.log("not found");

// const updatedObj = {
//   ...obj[indexofele],
//   interViewStatus: true,
// };

// obj[indexofele] = updatedObj;

// console.log(obj);

// console.log(1);
// setTimeout(() => console.log("2"), 0);
// console.log(3);

// const user = {
//   username: "malik",
//   pass: "123",
//   getUserDetails: function () {
//     let username = "another";
//     console.log(this.username);
//     return username;
//   },
// };
// const i = user.getUserDetails;
// let name = i(); // in this case you are calling the i inside the globale context so this is not refer to the user object becuse you are calling the i outside
// console.log(name);
// name = "usernot found";
// console.log(name);

function getUserDetails(username, password, isLoggedIn) {
  this.username = username;
  this.password = password;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const user = getUserDetails("username", "password", "isLoggedIn");
const user1 = getUserDetails("username222", "123456", true);

console.log(user.username, user.password, user.isLoggedIn);
console.log(user1.username, user1.password, user1.isLoggedIn);
