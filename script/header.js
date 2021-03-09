const bars = document.querySelector(".header_item__menu");

function handleOpener() {
  bars.style.color = "red";
}

function one() {
  bars.addEventListener("click", handleOpener);
}

one();
