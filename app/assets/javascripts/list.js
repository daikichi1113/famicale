$(function(){
  $(".left-box__calendar-items__group-list").on("click",function(){
    var leftVal = 0;
    if ($(this).hasClass("open")){
      leftVal = -150;
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }

    $("#list-navi").stop().animate({
      left: leftVal
    }, 200);
  });
});

