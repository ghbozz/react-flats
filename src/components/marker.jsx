import React, { Component } from 'react';

class Marker extends Component {

  render() {
    return (
      <div className="marker">
        <span>{this.props.price}</span>
      </div>
    )
  }
}

export default Marker
