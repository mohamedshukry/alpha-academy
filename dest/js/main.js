/* global $ , alert , console*/
$(function () {

// 	//======= change active li onclick it =======//
	$(".nav li").on("click", function() {
		$(".nav li").removeClass("active");
		$(this).addClass("active");
	});

// 	//======= Adjust Slider Height =======//
	if ( $(window).width() < 600){
		var winH    = $(window).height(),
		    topBar  = $('.top-bar').innerHeight(),
		    navH    = $('.navigation').innerHeight(),
		    wind    = $(window).width(),
		    hit     = wind * .9 ;
		    $('.slider, .carousel-item').height(hit);}
    else if ( $(window).width() < 868) {
	    	hit1     = wind * 1 ;
	    	$('.slider, .carousel-item').height(hit1);
		}
	else {
		hit3     = wind * .6 ;
		$('.slider, .carousel-item').height(hit3);
	}
//     //======= display dropmenu on hover =======//
    $('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
	

	});
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
 
//======= scroll Up =======//
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.scrollup').fadeIn('slow');
        }else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 2000);
        return false;
    });
    
//======= owl carousel =======//
  	$(document).ready(function(){
	 var owl = $('.owl-carousel');
		owl.owlCarousel({
		    loop:true,
		    margin:30,
		    dots:true,
		    rtl:true,
		    nav:true,
		    items:4,
		    responsive:{
		       0:{
		           items:1,
		       },
		       576:{
		           items:2,
		       },
		       992:{
		           items:4,
		       }
		   },
		    autoplay:true,
		    animateIn: 'fadeUp',
            animateOut: 'fadeOut',
		    autoplayTimeout:5000,
		    responsiveClass:true,
		    autoplayHoverPause:false,
		});
		$('.play').on('click',function(){
		    owl.trigger('play.owl.autoplay',[1000])
		})
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
		})
	});
$(document).ready(function(){
    $("#card-hover").hover(function(){
    	$("#card-background").css("background-color","#d47d11")
        $("#card-show").slideDown("");
    },
     function(){
        $("#card-show").slideUp("slow");
        $("#card-background").css("background-color","#00aaff" ,"slow")
    });
});
//======= counter	=======// 
  	$('.count .timer').countTo();

  	// slider

