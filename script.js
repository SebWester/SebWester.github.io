document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelectorAll(".socialLinks");
  const socialLinksSmall = document.querySelectorAll(".socialLinksSmall");

  function handleResize() {
    // Handling icon size depending on window width
    if (window.innerWidth <= 600) {
      socialLinks.forEach((largeIcon) => {
        largeIcon.style.display = "none";
      });

      socialLinksSmall.forEach((smallIcon) => {
        smallIcon.style.display = "inline-block";
      });
    }

    if (window.innerWidth >= 600) {
      socialLinks.forEach((largeIcon) => {
        largeIcon.style.display = "inline-block";
      });

      socialLinksSmall.forEach((smallIcon) => {
        smallIcon.style.display = "none";
      });
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
});
