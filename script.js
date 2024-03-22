"use strict";
const navbarIcon = document.querySelector("#mobile--icon");
const nav = document.querySelector(".navbar");
const closeIcon = document.querySelector("#close");
navbarIcon.addEventListener("click", () => {
  nav.classList.add("active--navbar");
});
closeIcon.addEventListener("click", () => {
  nav.classList.remove("active--navbar");
});

