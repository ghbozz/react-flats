import React, { Component } from 'react';

class Flat extends Component {

  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`
    }
    return (
      <div className="card" style={style} onClick={() => this.props.click(this.props.flat)}>
        <div className="card-category">{this.props.flat.price} €</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat
