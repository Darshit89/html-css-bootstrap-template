$(document).ready(function () {
  $("i").click(function () {
    $(this).toggleClass("fa-times");
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".mynav").addClass("sticky");
    } else {
      $(".mynav").removeClass("sticky");
    }
  });
  // --------typing effect-------
  var typed = new Typed(".element", {
    strings: ["Darshit Vaghasiya", "a Web-Devloper"],
    smartBackspace: true,
    startdealy: 100,
    typeSpeed: 100,
    backSpeed: 200,
    loop: true,
    loopCount: Infinity,
  });
  // -------progressbar animation effect -------

  var waypoint = new Waypoint({
    element: document.getElementById("skills"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:82%;transition:1.5s all");
      p[1].setAttribute("style", "width:79%;transition:1.7s all");
      p[2].setAttribute("style", "width:80%;transition:1.9s all");
      p[3].setAttribute("style", "width:75%;transition:2.3s all");
      p[4].setAttribute("style", "width:81%;transition:2.3s all");
      p[5].setAttribute("style", "width:78%;transition:2.3s all");
    },
    offset: "90%",
  });

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });
});
