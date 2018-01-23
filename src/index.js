import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomeContainer from './containers/Home';
import MapContainer from './containers/Map';


let target = document.getElementById('app');
console.log('TARGET:', target);


class App extends Component {
  
  render() {
    return (
      <Router>
        <Route path="/" component={MapContainer}/>
      </Router>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);


