"use strict";

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	document.body.classList.toggle("light-theme");
});