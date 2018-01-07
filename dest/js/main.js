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