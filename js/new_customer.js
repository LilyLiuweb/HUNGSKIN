/*input text*/
$(function(){
  $('#btn').click(function(){
     let userName = $('#userName').val();
     $('#result').text(`${userName}的檢測結果如下: `);
     $('#detail').css('opacity',1);
     $('.detail ul li h3').css('color','#B1A3A2')
 })
})

window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop>400){
      $id("header").classList.add("bg_change");
  }else{
      $id("header").classList.remove("bg_change");
  }
})