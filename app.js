const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "red";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let buttonMode = "default";

const gridContainer = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const colorModeButton = document.getElementById("colorMode");
const rainbowModeButton = document.getElementById("rainbowMode");
const eraserModeButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const slider = document.getElementById("myRange");
const sliderTextValue = document.getElementById("sliderValue");

slider.onchange = (e) => updateSize(e.target.value);

/* buttons click events*/
colorModeButton.addEventListener("click", () => {
  buttonMode = "color";
  
});

eraserModeButton.addEventListener("click", () => {
  buttonMode = "eraser";
  
});

rainbowModeButton.addEventListener("click", () => {
  buttonMode = "rainbow";
  
});

/*updating size wrt to slider value and resetting/clearing grid*/
clearButton.addEventListener("click", () => {
  updateGrid(currentSize);
});

function updateSize(value) {
  currentSize = value;
  updateGrid(value);
}

function clear() {
  gridContainer.innerHTML = "";
}

function updateGrid(value) {
  clear();
  addGrid(value);
}
/*updating size wrt to slider value*/

/* changing the text vlaue wrt slider*/
slider.addEventListener("mousemove", (e) => {
  textValueUpdater(e.target.value);
});

function textValueUpdater(value) {
  sliderTextValue.innerHTML = `${value}x${value}`;
}
/* changing the text vlaue wrt slider*/

/*generating grid with size of slider value*/
function addGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      gridContainer.appendChild(div);

      div.addEventListener("mouseover", changeColor);
    }
  }
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

window.onload = () => {
  addGrid(currentSize);
};

/* changing color as per the color mode*/
function changeColor(e) {
  if (buttonMode === "color") {
    e.target.style.background = colorPicker.value;
  }

  if (buttonMode === "eraser") {
    e.target.style.background = "white";
  }

  if (buttonMode === "rainbow") {
    e.target.style.background = randomHex();
  }

  if (buttonMode === "default") {
    e.target.style.background = currentColor;
  }
}

/*Generating random hex colors*/
randomHex();
function randomHex() {
  let hexcolor = "#";

  for (let i = 0; i < 6; i++) {
    hexcolor += hex[Math.floor(Math.random() * hex.length)];
  }

  return hexcolor;
}
