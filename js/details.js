"use strict";
const MainImg = document.querySelector("#pro__img");
const allSmallImg = document.querySelector(".similar_container");

allSmallImg.addEventListener("click", (e) => {
  const smallImg = e.target.closest(".small__img");
  if (!smallImg) return;
  MainImg.src=smallImg.firstElementChild.src
});
