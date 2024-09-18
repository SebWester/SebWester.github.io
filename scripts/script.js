// SCRIPT TEST!
const searchButton = document.getElementById("search-btn");
const comingSoon = document.getElementById("comingSoon");
const navBtn = document.getElementById("navButton");
const linkMenu = document.getElementById("linkMenu");

let totalClicks = 0;
searchButton.addEventListener("click", function (event) {
  // Denna kod förhindrar att formuläret skickas när knappen trycks
  event.preventDefault();

  totalClicks += 1;
  console.log("Clicked!");
  console.log("Number of clicks: " + totalClicks);
});

comingSoon.addEventListener("click", function () {
  alert("Coming soon!");
});

// Visa/dölj menyn på mobilskärm
navBtn.addEventListener("click", function () {
  if (linkMenu.style.display === "flex") {
    linkMenu.style.display = "none";
  } else {
    linkMenu.style.display = "flex";
  }
});

console.log("Script loaded =)");
