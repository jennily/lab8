function initMap() {
	// add your code here
	L.mapquest.key = 'qWHJ4yjoALwXIbveRiZivL7zWaX2cS8V';

	//'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.878626, -117.235895],
	  layers: L.mapquest.tileLayer('map'),
 	  zoom: 12,
 	  zoomControl: false
 	});

 	//Add a marker to the map
 	L.marker([32.878626, -117.235895]).addTo(map);
}