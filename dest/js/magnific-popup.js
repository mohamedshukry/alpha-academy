/* global $ , alert , console*/
$(function () {
	$(document).ready(function() {
	    $('.parent-container').magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        mainClass: 'mfp-img-mobile',
	        gallery: {
	            enabled: true,
	            navigateByImgClick: true,
	            preload: [0,1]
	        }
	    });
	});
});
