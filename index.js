const navLinksEl = $(".nav-links");
const toggleBtn = $(".toggle-btn");
const ulEl = $(".ul-toggle");
const ulDivEl = $(".ul-container");
const logoEl = $(".logo");
iDown = $("#down");

// button nav toggle
toggleBtn.on("click", function () {
  $("i", $(this)).toggleClass(
    "fa-sharp fa-solid fa-circle-chevron-down fa-solid fa-circle-chevron-up"
  );
  ulDivEl.toggle("slow");
});

ulEl.on("click", "a", function () {
  ulDivEl.toggle("slow");
  iDown.toggleClass(
    "fa-sharp fa-solid fa-circle-chevron-down fa-solid fa-circle-chevron-up"
  );
});

// hello typing effect
const typedText = document.querySelector(".text");
const wordsArray = ["Hello,", "Labas,", "Пpивeт,"];
let i = 0;
let j = 0;

function type() {
  if (j < wordsArray[i].length) {
    typedText.textContent += wordsArray[i].charAt(j);
    // console.log(j);
    j++;
    setTimeout(type, 300);
  } else {
    setTimeout(erase, 1000);
  }
}
function erase() {
  if (j > 0) {
    typedText.textContent = wordsArray[i].substring(0, j - 1);
    j--;
    setTimeout(erase, 100);
  } else {
    i++;
    if (i >= wordsArray.length) i = 0;
    setTimeout(type, 300);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 500);
});

// Navigating

const scrollLinks = document.querySelectorAll(".scroll-link");
const navBar = document.querySelector(".nav");

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navBarHeight = navBar.getBoundingClientRect().height;
    let position = element.offsetTop - navBarHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
