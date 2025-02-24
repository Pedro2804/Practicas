$(document).ready(function () {
    $("#scrollUp").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
});

document.addEventListener("scroll", function () {
    const scrollUpButton = document.getElementById("scrollUp");
    if (window.scrollY > 200) { 
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
});