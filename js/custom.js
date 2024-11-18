AOS.init();

$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()){
      $("img").addClass("small");
    }else{
      $("img").removeClass("small");
    }
  });
  $(window).scroll(function(){
    if($(window).scrollTop()){
      $("a").addClass("small");
    }else{
      $("a").removeClass("small");
    }
  });
});

$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 300);
     return false;
  });
});// JavaScript Document