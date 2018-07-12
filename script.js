function initMap() {
  var myLatLng = {lat: 44.744, lng: -85.655};

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Rolling Farms Cafe'
  });
}

initMap();