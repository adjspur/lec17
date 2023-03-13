let colourIndex = 1;
const COLOURS = ["yellow", "blue", "green", "pink", "#bada55"];

const DIV = document.querySelector("div");
const INPUT = document.querySelector("input");

// An event handler.
function log(event) {
  console.log(event);
}

// 🤔 How do we make our DIV and INPUT elements
//    listen for clicks and log the resulting event?
