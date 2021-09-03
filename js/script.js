$('.owl-one').owlCarousel({
    loop:true,
    margin:60,
    nav:false,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        700:{
            items:3
        },
        900:{
            items:4
        },
        1000:{
            items:5
        }
    }
})


$('.owl-two').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    autoplay:true,
    autoplayTimeout:8000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


$(document).ready(function(){
   
     $(window).scroll(function(){
         var scroll = $(window).scrollTop();
         if(scroll>50){
             $("#my-nevigation").css("background","#fff");

         }
         else{
            $("#my-nevigation").css("background","transparent");

         }
     })
  
})