function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(55.672657, 10.239895),
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker1Pos = { lat: 56.168373, lng: 10.20303 };
  var marker1 = new google.maps.Marker({
    position: marker1Pos,
    title: "Aarhus Universitet"
  });

  marker1.setMap(map);
}