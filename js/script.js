$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    console.log("hello");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("original-background");
  });
});
