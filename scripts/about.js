// SCRIPT TEST!
const comingSoon = document.getElementById("comingSoon");
const navBtn = document.getElementById("navButton");
const linkMenu = document.getElementById("linkMenu");

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
