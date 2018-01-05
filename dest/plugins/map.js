(function ($) {
	var myLatLng = new google.maps.LatLng(24.6449535,46.715066);
	var markerposition = new google.maps.LatLng(24.6449535,46.715066);
	var marker;
	var map;

	function initialize() {
	  var mapOptions = {
		zoom: 18,
		center: myLatLng,
	  };

	  map = new google.maps.Map(document.getElementById('google-map'),
			  mapOptions);

	  marker = new google.maps.Marker({
		map:map,
		animation: google.maps.Animation.DROP,
		position: markerposition,
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
})(jQuery);
