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
      allFlats: [],
      location: { lat: 48.866667, lng: 2.333333},
      search: ''
    }
  }

  handleSearchInput = event => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter(flat =>
        flat.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  };

  handleClick = flat => {
    this.setState({ location: { lat: flat.lat, lng: flat.lng } })
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          flats: data,
          allFlats: data
        })
      );
  }

  render() {
    return (
      <div>
      <div className="left-scene">
        <input
          className="form-control form-search"
          type="text"
          value={this.state.search}
          onChange={this.handleSearchInput}
        />
        <FlatList list={this.state.flats} click={this.handleClick} />
      </div>
        <div className="map-container">
          <GoogleMapReact
            center={this.state.location}
            bootstrapURLKeys={{ key: ENV['GMAP'] }}
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
