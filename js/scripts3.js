$(document).ready(function() {
  $(".clickable").click(function() {
    $("#picture-visible").toggle();
    $("#picture-hidden").toggle();
});

  $(".clickable1").click(function() {
    $(".yazh-visible").toggle();
    $(".yazh-hidden").toggle();
  });

  $("#flip").click(function(){
        $("#panel").slideToggle("slow");
  });

  $("button").click(function(){
          $("#div1").fadeToggle();
          $("#div2").fadeToggle("slow");
          $("#div3").fadeToggle(3000);
  });
});
