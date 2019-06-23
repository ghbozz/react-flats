import GoogleMapReact from 'google-map-react';

import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Flat from './flat.jsx';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flats: [],
      defaultLocation: { lat: 48.866667, lng: 2.333333}
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          flats: data,
        })
      );
  }

  render() {
    return (
      <div>
        <FlatList list={this.state.flats} />
        <div className="map-container">
          <GoogleMapReact
            center={this.state.selectedFlat || this.state.defaultLocation}
            bootstrapURLKeys={{ key: 'AIzaSyCksPM_FclDZGRwMa7gSdMs2q0MIYVceQw' }}
            zoom={13}>
            {this.state.flats.map(flat => (
              <Marker
                price={flat.price}
                lat={flat.lat}
                lng={flat.lng}
                key={flat.id}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App
