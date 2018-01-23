import React, { Component } from 'react';

export default class HomeContainer extends Component {


  render() {

    console.log('Children:', this.props.children);

    return (
      <div>
        <h1>HOME</h1>
        { this.props.children }
      </div>
    )
  }


}