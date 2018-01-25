import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from '../../config';
import Polygon from '../components/Polygon';

import { senate_districts } from '../resources/senate_districts';
import { DistrictContainer } from './District';

class MapContainer extends Component {

  render() {

    var triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ];

    return (
      <Map 
        google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={3} >

        <Polygon
          paths={triangleCoords}
          strokeColor="#FF0000"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#FF0000"
          fillOpacity={0.35} />

      </Map>
    );
  }

}

export default GoogleApiWrapper({ apiKey: GOOGLE_MAPS_API_KEY })(MapContainer)






    //  Coordinates of the Bermuda triangle given by the example on the google maps api docs
    //  https://github.com/fullstackreact/google-maps-react/blob/master/README.md
    //  https://developers.google.com/maps/documentation/javascript/shapes

        // <Map google={this.props.google}
        //     style={{width: '100%', height: '100%', position: 'relative'}}
        //     className={'map'}
        //     zoom={14}>
        //     <Polygon
        //       google={this.props.google}
        //       paths={triangleCoords}
        //       strokeColor="#0000FF"
        //       strokeOpacity={0.8}
        //       strokeWeight={2}
        //       fillColor="#0000FF"
        //       fillOpacity={0.35} />
        // </Map>




// ---------------------
        // <Map
        //   google={googleObj}
        //   initialCenter={ {lat: 42.0987, lng: -75.9180} }
        //   zoom={7}
        // >
        // <Polygon
        //   google={googleObj}
        //   key={dist1.ID}
        //   paths={triangleCoords /*dist1.coords*/}
        //   strokeColor="#FF0000"
        //   strokeOpacity={0.8}
        //   strokeWeight={2}
        //   fillColor="#FF0000"
        //   fillOpacity={0.35}
        // />
        // </Map>

    // let dist1 = senate_districts[9];
    // dist1.coords = dist1.coordinates.map(([lng, lat]) => ({lat, lng}))

    // //----------------------------

    // console.log('MAP PROPS:', this.props)

    // const googleObj = this.props.google;