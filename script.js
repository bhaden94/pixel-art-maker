// make pixel grid
for (let i = 0; i < 4000; i++) {
  let boxDiv = document.createElement("div");
  boxDiv.className = "boxes";
  document.getElementById("pixel-container").appendChild(boxDiv);
}

// gets current color picked and sets it
// also sets current color box
let currentColor = "rgb(255, 255, 255)"; // starting value is white
document.querySelector("#color-picker").addEventListener("mousedown", (e) => {
  let currentElement = document.querySelector(`.${e.target.className}`);
  currentColor = getComputedStyle(currentElement).backgroundColor;
  let currentColorBox = document.querySelector(".current-color-box");
  currentColorBox.style.backgroundColor = currentColor;
});

// changes background color of pixel clicked
let timeout;
document
  .querySelector("#pixel-container")
  .addEventListener("mousedown", (e) => {
    // if statement to stop border color from being changed
    console.log(e)
    if (e.target.id !== "pixel-container") {
      timeout = setInterval(() => {
        let clickedPixel = e.target;
        clickedPixel.style.backgroundColor = currentColor;
        console.log(e)
      }, 100);
    }
    return false;
});

document
  .querySelector("#pixel-container").addEventListener('mouseup', () => {
  clearInterval(timeout)
  return false;
})

document
  .querySelector("#pixel-container").addEventListener('mouseout', () => {
  clearInterval(timeout)
  return false;
})
