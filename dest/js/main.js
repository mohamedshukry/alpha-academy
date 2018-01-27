/* global $ , alert , console*/
$(function () {

// 	//======= change active li onclick it =======//
	$(".nav li").on("click", function() {
		$(".nav li").removeClass("active");
		$(this).addClass("active");
	});

// 	//======= Adjust Slider Height =======//
	if ( $(window).width() > 768){
		var winH    = $(window).height(),
		    topBar  = $('.top-bar').innerHeight(),
		    navH    = $('.navigation').innerHeight();
		$('.slider, .carousel-item-main').height(winH - ( topBar + navH ));
		}

//     //======= display dropmenu on hover =======//
    $('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
	

});
 
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

  	//======= owl carousel =======//
  	$(document).ready(function(){
	 var owl = $('.owl-carousel');
		owl.owlCarousel({
		    loop:true,
		    margin:10,
		    dots:true,
		    rtl:true,
		    nav:false,
		    items:1,
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
		$("#card").on('click',function(){
			$("#card").css("border","2px solid #cc9900");
			$("#card i").css("color","#cc9900");
			$("button").toggle();
		});
	});	