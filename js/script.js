$(function() {
  $(".carousel").carousel( { interval: 2000 } );
  $("#carouselButton").click(function(){
    if($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
  
  $("#reserveBtn").on( "click", function() {
    $("#reserveModal").modal("show");
  });

  $("#loginBtn").on( "click", function() {
    $("#loginModal").modal("show");
  });
});

