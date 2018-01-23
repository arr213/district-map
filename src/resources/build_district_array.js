'use strict';
const shapefile = require('shapefile');
const fs = require('fs');
const util = require('util');


shapefile.read("./resources/2012_Senate_shapefile/2012_Senate.shp")
  .then(source => {
    console.log(typeof source);
    console.log(source.features[0]);
    console.log(source.features[0].geometry.coordinates[0]);
    let districts = source.features.map(d => {
      d.geometry.coordinates = d.geometry.coordinates[0];
      let district = Object.assign({}, d.properties, d.geometry)
      return district;
    });
    fs.writeFileSync('./resources/senate_districts.js', JSON.stringify(districts));
  })
  .catch(error => console.error(error.stack));