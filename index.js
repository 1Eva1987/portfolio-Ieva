const navLinksEl = $(".nav-links");
const toggleBtn = $(".toggle-btn");
const ulEl = $(".ul-toggle");
const ulDivEl = $(".ul-container");
const logoEl = $(".logo");

// button nav toggle
toggleBtn.on("click", function () {
  $("i", $(this)).toggleClass(
    "fa-sharp fa-solid fa-circle-chevron-down fa-solid fa-circle-chevron-up"
  );
  ulDivEl.toggle("slow");
});

// word typing effect
const typedText = document.querySelector(".text");
const wordsArray = ["Hello", "Labas", "Привeт"];
let i = 0;
let j = 0;

function type() {
  if (j < wordsArray[i].length) {
    typedText.textContent += wordsArray[i].charAt(j);
    console.log(j);
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
