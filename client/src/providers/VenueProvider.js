const { Component } = require("react");

import React, { Component } from 'react';
import axios from 'axios';

const VenueContext = React.createContext();

export const VenueConsumer = VenueContext.Consumer;

class VenueProvider extends Component {
  state = { venues: [] }

  componentDidMount() {
    axios.get('api/venues')
      .then( res => {
        this.setState ({ venues: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addVenue = (venue) => {
    axios.post('api/venues', { venue })
      .then( res => {
        const { venues } = this.state
        this.setState({ venues: [...venues, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  updateVenue = (id, diner, history) => {
    axios.put(`/api/venues/${id}`, { venue })
      .then( res => {
        const venues = this.state.venues.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        this.setState({ venues })
        history.push('/venues')
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteVenue = (id, history) => {
    axios.delete(`/api/venues/${id}`)
      .then( res => {
        const { venues } = this.state
        this.setState({ venues: venues.filter( d => d.id !== id )})
        history.push('/venues')
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return(
      <VenueContext.Provider value={{
        ...this.state,
        addVenue: this.addVenue,
        updateVenue: this.updateVenue,
        deleteVenue: this.deleteVenue,
      }}>
        { this.props.children }
      </VenueContext.Provider>
    )
  }
}

export default VenueProvider;
