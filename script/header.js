const bars = document.querySelector(".header_item__menu");
const header = document.querySelector(".header_item__hidden");

const ACTIVE = "active",
  HIDDEN = "hidden";

let control = "true";

function handleClick() {
  if (control === "true") {
    header.classList.add(ACTIVE);
    bars.style.color = "red";
    control = "false";
  } else {
    header.classList.remove(ACTIVE);
    control = "true";
    bars.style.color = "white";
  }
}

function init() {
  bars.addEventListener("click", handleClick);
}

init();
