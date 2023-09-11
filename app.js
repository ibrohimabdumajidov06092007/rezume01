const p = document.querySelector("p");
const body = document.querySelector(".body");
const f = document.querySelector(".fixed");
const menu = document.querySelector(".menu");
const ul = document.querySelector(".dvd");
const uyr = document.querySelector("hyr");
const rang = document.querySelector(".rang");
const inp = document.querySelector("input");
const n = document.querySelector(".fixed");

inp.addEventListener("input", () => {
  ul.style.background = inp.value;
  body.style.background = inp.value;
  n.style.background = inp.value;
});

menu.addEventListener("click", () => {
  ul.classList.toggle("akk");
});
