const square = document.querySelectorAll(".squares");
// const redDiv = document.getElementById("red");
// redDiv.onclick = () => console.log("red");
// console.log(square[1].value);
// console.log(square[0].value);
let clear = document.getElementById("counter");

// console.log(count.innerText);
// square.forEach((square) => {
//    square.onclick = () => console.log(square.value);
//   //   console.log(square.value);
// });

const timesCliked = { red: 0, green: 0, yellow: 0 };

square.forEach((square) => {
  square.onclick = () => {
    timesCliked[square.value]++;
    square.innerText = timesCliked[square.value];
  };
});
clear.onclick = () => {
  console.log(timesCliked.red);
};
