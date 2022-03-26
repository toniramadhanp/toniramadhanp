$(window).on("load", function () {
  $(".h1jumb").addClass("muncul");
  $(".pjumb").addClass("muncul");
});

$(window).on("load", function () {
  $("h2").addClass("muncull");
  $("h5").addClass("muncull");
  $("button").addClass("muncull");
});

$("button").hover(function () {
  $(this).toggleClass("active").next().stop(true, true).slideToggle();
});
