const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
let body = document.querySelector("body");
function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

let timer;
btn1.addEventListener("click", () => {
  timer = setInterval(() => {
    const red = getRandomColor();
    const green = getRandomColor();
    const blue = getRandomColor();
    const bacgroundcolor = `rgba(${red}, ${green}, ${blue},1)`;
    body.style.backgroundColor = bacgroundcolor;
  }, 1000);
});

btn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});
