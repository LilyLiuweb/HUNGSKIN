    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav: true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:5
            }
        }
    })
function $id(id){
    return document.getElementById(id);
}
var headerBg = document.getElementById('carouselExampleIndicators')
window.addEventListener('scroll',function(){
    headerBg.style.opacity = 1 - +window.pageXOffset/550+'';
})

/*header_scrollTop*/

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>400){
        $id("header").classList.add("bg_change");
    }else{
        $id("header").classList.remove("bg_change");
    }
})
/*index_slider*/
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>3){
        counter = 1;
    }
},3000);

  /*product_introduction product_num*/
  window.addEventListener("load", function(){ 
        let btnPluses = document.getElementsByClassName("btnPlus");
        let btnMinuses = document.getElementsByClassName("btnMinus");
        let qtys = document.getElementsByClassName("qty");
        
        for(let i = 0; i<btnPluses.length ; i++){
            btnPluses[i].onclick = function(e){
                let qtyBox = e.target.previousElementSibling;
                qtyBox.value = parseInt(qtyBox.value)+1
            }
        }
        for(let i = 0; i<btnMinuses.length ; i--){
            btnMinuses[i].onclick = function(e){
                let qtyBox = e.target.previousElementSibling;
                qtyBox.value = parseInt(qtyBox.value)-1
            }
        }
    })

    /*product_introduction showLarge*/
    function showLarge(e){
        let small = e.target;
        document.getElementById('large').src = small.src;
    }
    function doFirst(){
        let imgs = document.querySelectorAll('#smallPanel .pic img');
        for(let i=0 ; i<imgs.length;i++){
            imgs[i].onclick = showLarge;
        }
    }
    window.addEventListener('load',doFirst)

    /*tips*/
    $('.skin_type').click(function(){
        $(this).addClass('.type_animate');
    })
    $('.skinCare_routine .row .box').click(function(){
        $(this).addClass('.type_animate');
    })

    /*pagination*/
    var pagination = document.querySelector('.pagination');
    let allPages = 6;
     
    function elem(allPages,page){
        let li= '';
    
        let beforePages = page - 1;
        let afterPages = page + 1;
        let aActive;
    
        //左箭頭
        if(page > 1){
            li += `<li onclick="elem(allPages, ${page-1})">&laquo;</li>`
        }
    
        //自動生成頁數
        for ( let pageLength = beforePages ;pageLength <= afterPages; pageLength++ ){
    
            if(pageLength > allPages){
                continue;
            }
            if(pageLength == 0){
                pageLength = pageLength+1;
            }
            if(page == pageLength){
                aActive = 'active';
            }else{
                aActive = '';
            }
            li+= ` <li class="${aActive}" onclick = "elem(allPages,${pageLength})">${pageLength}</li>`;
        }
        //右箭頭
        if(page < allPages){
            li += `<li onclick="elem(allPages, ${page+1})">&raquo;</li>`
        }
        pagination.innerHTML = li;
    }
    elem(allPages,1)
    