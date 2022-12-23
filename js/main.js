let moreProj = document.querySelector("#more-project");
let moreProjBtn = document.querySelector(".view-projects");

moreProjBtn.addEventListener("click", () => {
  if (!moreProj.style.maxHeight) {
    moreProjBtn.textContent = "VIEW LESS";
    moreProj.style.maxHeight = moreProj.scrollHeight + "px";
  } else {
    moreProjBtn.textContent = "VIEW MORE";
    moreProj.style.maxHeight = null;
  }
});

(function ($) {
  // "use strict";

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });
})(jQuery);
