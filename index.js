var navLinksEl = $(".nav-links");
var toggleBtn = $(".toggle-btn");
var ulEl = $(".ul-toggle");
var ulDivEl = $(".ul-container");
var logoEl = $(".logo");

toggleBtn.on("click", function () {
  if (ulDivEl.hasClass("hidden")) {
    ulDivEl.removeClass("hidden");
  } else {
    ulDivEl.addClass("hidden");
  }
});
