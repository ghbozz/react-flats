import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {

  render() {
    return (
      <div className="flat-list">
        {this.props.list.map(flat => <Flat flat={flat} key={flat.id} click={this.props.click} />)}
      </div>
    )
  }
}

export default FlatList
