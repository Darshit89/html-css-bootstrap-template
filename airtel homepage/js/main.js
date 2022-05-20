$(document).ready(function () {
  $(".nav-item").hover(function () {
    $(this).toggleClass("round");
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".mainnav").addClass("fix");
    } else {
      $(".mainnav").removeClass("fix");
    }
  });
  $(".show").click(function () {
    $("#moreinfo").toggleClass("visible");
  });
  $(".show").click(function () {
    if ($("#moreinfo").is(":hidden")) {
      $(this).html(
        'More <span class="fas fa-chevron-down" style="color:#ec0f0f;"></span>'
      );
    } else {
      $(this).html(
        'Less <span class="fas fa-chevron-up" style="color:#ec0f0f;"></span>'
      );
    }
  });

  $(".navplus i").click(function () {
    $(this).toggleClass("fa-plus fa-minus");
    $(".footernavlink").toggleClass("apeear");
  });
});
