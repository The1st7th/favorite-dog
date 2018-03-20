$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    $("div#border3").removeClass("border");



  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("original-background");
    $("div#border3").addClass("border");
    var hello = prompt("tell me your name");
    console.log(hello);


  });
});
