// const arr = [5, 7, 9, 11, 15];

// let start = 0;
// let next = 1;

// let ans = 0;
// while (next !== arr.length) {
//   if (arr[next] - arr[start] !== 2) {
//     ans = (arr[start] + arr[next]) / 2;
//     break;
//   }
//   start++;
//   next++;
// }

// console.log(ans);

//00:00 🎬 Introduction to Advanced JavaScript Interview Questions
// - Overview of advanced JavaScript interview questions.
// - Focus on clarifying concepts related to JavaScript.
// 01:02 🏠 Solving the "Magical Sorting Hat" Problem
// - Explanation of a problem involving sorting students into houses.
// - Demonstration of using a for loop to assign students to houses based on a predefined area.
// 02:24 🧹 Assigning Houses to Students
// - Utilizing a for loop to assign students to houses.
// - Demonstrating how to iterate over student names and assign them to houses.
// 03:49 🏡 Finalizing House Assignments
// - Finalizing the assignment of houses to students based on specific conditions.
// - Using conditional statements to determine the final house assignments for each student.
// 05:23 📝 Solving coding questions,
// - The solution for each question is in the solution folder.
// - Double trouble question: UR Task with writing a function that doubles each element in an array if there is a catch.
// - Increasing the difficulty: Implementing a function that doubles any one of the two randomly chosen consecutive duplicates in an array.
// 06:19 🛠️ Coding challenges,
// - Password validator: Creating a password validation feature that checks if a password has at least eight characters, including uppercase, lowercase letters, and at least one digit.
// - Implementing a simple way to check for uppercase and lowercase letters in a string using dot length.
// - A more efficient way to check for uppercase and lowercase letters by creating separate lists for each and checking values.
// 07:00 💻 More coding challenges,
// - Vowels counter: Creating a function that counts the number of vowels in a given string considering both uppercase and lowercase vowels.
// - A simple method to count vowels by creating an array of vowels and counting occurrences in the string.
// - An alternative method using value to count vowels: counting occurrences of 'a', 'e', 'i', 'o', 'u' in the string.
// 08:21 🗃️ Local storage concept,
// - Explaining the concept of local storage where data is stored in the browser.
// - Demonstrating how to use local storage by creating a simple script tag with a prompt to enter a name and displaying a welcome message with the entered name.
// - Storing the name in local storage using document.write and explaining how to access the stored value.
// 10:15 🔒 Storing and retrieving data in local storage,
// - Demonstrating the use of `localStorage.setItem` and `localStorage.getItem`.
// - Highlighting how to store and retrieve key-value pairs in local storage.
// 11:27 🗃️ Using object storage in local storage,
// - Converting JavaScript objects to strings using `JSON.stringify`.
// - Storing and retrieving objects in local storage using `localStorage.setItem` and `localStorage.getItem`.
// 12:37 🔑 Understanding stringification and parsing of objects,
// - Explaining how to convert objects to strings and back using `JSON.stringify` and `JSON.parse`.
// - Demonstrating the use of these methods to store and retrieve complex data structures in local storage.
// 14:27 📝 Storing Notes in Local Storage
// - Writing a function called "saveNoteToLocalstorage" that takes a note and stores it in the local storage as an object.
// - Using the `localStorage.setItem` method to store the note.
// - Using the `prompt` method to get the note from the user.
// 15:51 📝 Adding Notes Dynamically
// - Implementing a prompt to ask the user for a note and storing it in local storage.
// - Using `document.write` to display the note in the document.
// - Handling cases where the user doesn't input a note or cancels the prompt.
// 17:14 📝 Troubleshooting Display Issues
// - Creating a div and using `div.innerText` to display the note.
// - Reloading the page to see if the display issue is resolved.
// - Checking for errors in the console to identify and fix the problem.
// 18:48 🔄 Implementing a shopping cart functionality
// - Implementing a shopping cart functionality for an e-commerce website,
// - Calculating the total price of items in the cart using JavaScript,
// - Using local storage to store and retrieve cart data.
// 19:14 🔄 Implementing smooth scrolling to top functionality
// - Demonstrating how to implement smooth scrolling to top functionality,
// - Explaining the JavaScript code to achieve smooth scrolling,
// - Encouraging viewers to search for "how to scroll to a location in JavaScript" for more details.
// 19:41 🔄 Teaser for the next project: Sigma Project
// - Hinting at an upcoming project, "Sigma Project," which will be exciting and challenging,
// - Encouraging viewers to stay tuned for the next video to learn more about the project,
// - Mentioning that the next project will be showcased in the next video, which is expected to be impressive.

// let arr = [2, 7, 11, 4, -2];
// let sum = 0;
// let newarr = new Array();

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// for (let val of arr) {
//   newarr.push(sum - val);
// }
// console.log(newarr);

// Input: A list of students (["Harry", "Hermione", "Ron"]) and predefined houses (["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]).

// let student = ["Harry", "Hermione", "Ron"];
// let house = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
let students = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville"];
let houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

let ansObj = {};
for (let i = 0; i < students.length; i++) {
  ansObj[students[i]] = houses[i % houses.length];
}

console.log(ansObj);
