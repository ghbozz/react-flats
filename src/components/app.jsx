import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Flat from './flat.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flats: []
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
      </div>
    )
  }
}

export default App
