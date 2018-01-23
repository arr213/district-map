var map;

function initMap() {
    
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 42.0987, lng: -75.9180 },
    zoom: 7
  });

  assembly_districts.forEach((district, idx) => {
    try {
      addDistrict(district, map);
    } catch (err) {
      console.log(`Error on district: ${idx}.`, district.ID);
      console.log('ERROR:', err);
    }
    
  })

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


