$("element").click(function(){
    $(this).find(".toggleContainer").toggleClass(".active");
    $(this).siblings("toggle").find("toggleContainer");
  });