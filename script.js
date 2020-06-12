// make pixel grid
for (let i = 0; i < 4000; i++) {
  let boxDiv = document.createElement("div");
  boxDiv.className = "boxes";
  document.getElementById("pixel-container").appendChild(boxDiv);
}

// gets current color picked and sets it
let currentColor = "rgb(255, 255, 255)"; // starting value is white
document.querySelector("#color-picker").addEventListener("mousedown", (e) => {
  let currentElement = document.querySelector(`.${e.target.className}`);
  currentColor = getComputedStyle(currentElement).backgroundColor;
});

// changes background color of pixel clicked
document
  .querySelector("#pixel-container")
  .addEventListener("mousedown", (e) => {
    // if statement to stop border color from being changed
    if (e.target.id !== "pixel-container") {
      let clickedPixel = e.target;
      clickedPixel.style.backgroundColor = currentColor;
    }
  });
