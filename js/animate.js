function fadeAnime(){

    $('.fadeInTrigger').each(function(){ //
      var elemPos = $(this).offset().top-50;//
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');// 
      }else{
      $(this).removeClass('fadeIn');// 
      }
      });
  
    $('.fadeUpTrigger').each(function(){ //
      var elemPos = $(this).offset().top-50;//
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');//
      }else{
      $(this).removeClass('fadeUp');// 
      }
      });
    $('.fadeUpTrigger2').each(function(){ //
      var elemPos = $(this).offset().top-80;//
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 
      }else{
      $(this).removeClass('fadeUp');// 
      }
      });
  
    $('.fadeDownTrigger').each(function(){ //
      var elemPos = $(this).offset().top-50;//
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeDown');// 
      }else{
      $(this).removeClass('fadeDown');// 
      }
      });
  
    $('.fadeLeftTrigger').each(function(){ //
      var elemPos = $(this).offset().top-50;//
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeLeft');// 
      }else{
      $(this).removeClass('fadeLeft');// 
      }
      });
  
    $('.fadeRightTrigger').each(function(){ //
      var elemPos = $(this).offset().top-50;//
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');// 
      }else{
      $(this).removeClass('fadeRight');//
      }
      });
  

    $(window).scroll(function (){
      fadeAnime();
    });
  
    $(window).on('load', function(){
      fadeAnime();
    });
}