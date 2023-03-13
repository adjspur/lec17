import { picData } from "../data/pic-data.js";
import { picsumImg } from "./helpers/picsum-helpers.js";

const picImgs = picData.map((pic) => picsumImg(pic));
document.querySelector("div").append(...picImgs);

function round(e) {
  e.target.classList.add("rounded");
  console.log("this", this);
  console.log("e.target", e.target);
  console.log("e", e);
}

document.querySelector("img").addEventListener("click", round);

window.round = round;
