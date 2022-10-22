/*  
 function scrolldown(to,dutation){
    var to = document.getElementById(to);
    var to_position = to.getBoundingClientRect();
    var start_position= window.pageYOffset();
    var distance=to_position - start_position;
    var start = null;

    function step(timestamp) {
        if (start === undefined) {
          start = timestamp;
          }
        const elapsed = timestamp - start;
        window.scrollTo(0,smooth(progress,start_position,distance,dutation))
        if (previousTimeStamp !== timestamp) {
          // Math.min() is used here to make sure the element stops at exactly 200px
          const count = Math.min(0.1 * elapsed, 200);
        //   element.style.transform = `translateX(${count}px)`;
          if (count === 200) done = true;
        }
      
        if (elapsed < dutation) { // Stop the animation after 2 seconds
          previousTimeStamp = timestamp;
          if (!done) {
            window.requestAnimationFrame(step);
          }
        }
      }

      function smooth(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
    
      
      window.requestAnimationFrame(step);

}
document.getElementById("section1").addEventListener("click",function(){
  scrolldown('section6',2000);
})
document.getElementById("section1").addEventListener("click",function(){
  scrolldown('section5',2000);
})
document.getElementById("section1").addEventListener("click",function(){
  scrolldown('section4',2000);
})
document.getElementById("section1").addEventListener("click",function(){
  scrolldown('section3',2000);
})
document.getElementById("section1").addEventListener("click",function(){
    scrolldown('section2',2000);
})
document.getElementById("section2").addEventListener("click",function(){
    scrolldown('section1',2000);
})
document.getElementById("section2").addEventListener("click",function(){
    scrolldown('section0',2000);
}) */
/*input text*/
$(function(){
  $('#btn').click(function(){
     let userName = $('#userName').val();
     $('#result').text(`${userName}的檢測結果如下: `);
     $('#detail').css('opacity',1);
     $('.detail ul li h3').css('color','#B1A3A2')
 })
})