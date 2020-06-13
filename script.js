// make pixel grid
for (let i = 0; i < 4000; i++) {
  let boxDiv = document.createElement("div");
  boxDiv.className = "boxes";
  document.getElementById("pixel-container").appendChild(boxDiv);
}

let currentColor = "rgb(255, 255, 255)"; // starting value is white

// gets current color picked and sets it
// also sets current color box
document.querySelector("#color-picker").addEventListener("click", (e) => {
  let currentElement = document.querySelector(`.${e.target.className}`);
  currentColor = getComputedStyle(currentElement).backgroundColor;
  let currentColorBox = document.querySelector(".current-color-box");
  currentColorBox.style.backgroundColor = currentColor;
});

// changes background color of pixel clicked
// can hold down and drag to color many at once
let pixelContainer = document.querySelector("#pixel-container");
let isDown = false; // for checking during drag events if mouse is still being held down
pixelContainer.addEventListener("mousedown", (clicked) => {
  isDown = true;
  console.log(isDown);
  if (!isBorder(clicked)) {
    let clickedPixel = clicked.target;
    clickedPixel.style.backgroundColor = currentColor;
    pixelContainer.addEventListener("mouseover", (over) => {
      if (!isBorder(over) && isDown) {
        let overPixel = over.target;
        overPixel.style.backgroundColor = currentColor;
      }
    });
  }
});

// stops div borders from beign changed colors
function isBorder(div) {
  return div.target.id === "pixel-container";
}

// stops coloring on mouseup
pixelContainer.addEventListener("mouseup", () => {
  isDown = false;
});
