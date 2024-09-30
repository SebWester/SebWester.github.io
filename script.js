document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelectorAll(".socialLinks");
  const socialLinksSmall = document.querySelectorAll(".socialLinksSmall");
  const lastPara = document.querySelectorAll(".lastPara");

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

    // Removing last p-tag in every .card-div if window width < 530
    if (window.innerWidth < 530) {
      lastPara.forEach((para) => {
        para.style.display = "none";
      });
    }
    if (window.innerWidth > 530) {
      lastPara.forEach((para) => {
        para.style.display = "block";
      });
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
});
