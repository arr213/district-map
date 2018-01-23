import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Polygon } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from '../../config';
import { senate_districts } from '../resources/senate_districts';

export class DistrictContainer extends Component {


  render() {
    const props = this.props;


    let dist1 = senate_districts[9];
    var triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ];

    console.log('DISTRICT PROPS:', props);

    return (
      <Polygon
        key={'123124'}
        paths={triangleCoords}
        strokeColor="#FF0000"
        strokeOpacity={0.8}
        strokeWeight={2}
        fillColor="#FF0000"
        fillOpacity={0.35}
      />
    )

  }

}

