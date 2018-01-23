console.log('HELLO WORLD')

var map;

function initMap() {
    
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 42.0987, lng: -75.9180 },
    zoom: 7
  });

  var distric1Coords = districts[0].coordinates
    .map(([lng, lat]) => ({ lat, lng }))
    // .filter((coord, idx ) => !(idx % 200));

  console.log('distric1Coords:', distric1Coords);

  // Construct the polygon.
  var district1 = new google.maps.Polygon({
    paths: distric1Coords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });


    // Define the LatLng coordinates for the polygon's path.
  var triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];
  console.log('triangleCoords:', triangleCoords);

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);

  district1.setMap(map);

}


function addDistrict(district, map) {

  var distric1Coords = district.coordinates.map(([lng, lat]) => ({ lat, lng }))
    // .filter((coord, idx ) => !(idx % 200));

  // console.log('distric1Coords:', distric1Coords);

  // Construct the polygon.
  var district1 = new google.maps.Polygon({
    paths: distric1Coords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  district1.setMap(map);


}


