function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(55.672657, 10.239895),
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  // MAKING THE CONTENT FOR AARHUS MARKER //
  var aarhusContent =
    "<div>" +
    "<h3>Navn: Aarhus Universitet</h3>" +
    "<p style='color: black'>" +
    "Vil du læse mere om Aarhus Universitet?<br>" +
    '<a href="https://www.au.dk/" target="_blank">Klik her</a>' +
    "</p>" +
    "</div>";
  var assensContent =
    "<div>" +
    "<h3>Navn: Assens Kommune</h3>" +
    "<p style='color: black'>" +
    "Vil du læse mere om Assens Kommune?<br>" +
    '<a href="https://www.assens.dk/" target="_blank">Klik her</a>' +
    "</p>" +
    "</div>";
  var infowindowAarhus = new google.maps.InfoWindow({
    content: aarhusContent
  });
  var infowindowAssens = new google.maps.InfoWindow({
    content: assensContent
  });
  var marker1Pos = { lat: 56.168373, lng: 10.20303 };
  var marker1 = new google.maps.Marker({
    position: marker1Pos,
    title: "Aarhus Universitet",
    map: map
  });
  var marker2Pos = { lat: 55.298067, lng: 9.949491 };
  var marker2 = new google.maps.Marker({
    position: marker2Pos,
    title: "Assens",
    map: map
  });

  marker1.setMap(map);
  marker1.addListener("click", function() {
    infowindowAarhus.open(map, marker1);
  });
  marker2.setMap(map);
  marker2.addListener("click", function() {
    infowindowAssens.open(map, marker2);
  });
}
function burgerCollapse(x) {
  x.classList.toggle("change");
  var x = document.getElementById("mobile-Menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
