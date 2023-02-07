var navLinksEl = $(".nav-links");
var toggleBtn = $(".toggle-btn");
var ulEl = $(".ul-toggle");
var ulDivEl = $(".ul-container");
var logoEl = $(".logo");

toggleBtn.on("click", function () {
  $("i", $(this)).toggleClass(
    "fa-sharp fa-solid fa-circle-chevron-down fa-solid fa-circle-chevron-up"
  );
  // if (ulDivEl.hasClass("hidden")) {
  //   ulDivEl.removeClass("hidden");
  // } else {
  //   ulDivEl.addClass("hidden");
  // }
  ulDivEl.toggle("slow");
});
