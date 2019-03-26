var locations = [
								  ['Bondi Beach', -33.890542, 151.274856],
								  ['Coogee Beach', -33.923036, 151.259052],
								  ['Cronulla Beach', -34.028249, 151.157507],
								  ['Manly Beach', -33.80010128657071, 151.28747820854187],
								  ['Maroubra Beach', -33.950198, 151.259302]
								];
								var map;
								var markers = [];
								function init(){
								  map = new google.maps.Map(document.getElementById('cityMap'), {
									zoom: 10,
									center: new google.maps.LatLng(-33.92, 151.25),
									mapTypeId: google.maps.MapTypeId.ROADMAP
								  });
								  var num_markers = locations.length;
								  for (var i = 0; i < num_markers; i++) {  
									markers[i] = new google.maps.Marker({
									  position: {lat:locations[i][1], lng:locations[i][2]},
									  map: map,
									  html: locations[i][0],
									  id: i,
									});
									  
									google.maps.event.addListener(markers[i], 'click', function(){
									  var infowindow = new google.maps.InfoWindow({
										id: this.id,
										content:this.html,
										position:this.getPosition()
									  });
									  google.maps.event.addListenerOnce(infowindow, 'closeclick', function(){
										markers[this.id].setVisible(true);
									  });
									  this.setVisible(false);
									  infowindow.open(map);
									});
								  }
								}
								init();
