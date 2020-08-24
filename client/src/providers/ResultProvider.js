import React, { Component } from 'react';
import axios from 'axios';

const ResultContext = React.createContext();

export const ResultConsumer = ResultContext.Consumer;

class ResultProvider extends Component {
  state = { results: [] }

  getAllResults = (venue_id) => {
    axios.get(`/api/venues/${venue_id}/results`)
      .then( res => {
        this.setState({ results: res.data })
      })
      .catch( err => {
        console.log(err) 
        })
  }

  addResult = (venue_id, result) => {
    axios.post(`/api/venues/${venue_id}/results`, { result } )
      .then( res => {
        const { results } = this.state
        this.setState({ results: [ ...results, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  updateResult = (venue_id, id, result, history) => {
    axios.put(`/api/venues/${venue_id}/results/${id}`, { result } )
    .then( res => {
      const results = this.state.results.map( r => {
        if (r.id === id) {
          return res.data
        }
        return r
      })
      this.setState({ results: results })
      history.push('/venues')
    })
    .catch( err => console.log(err) )
  }

  deleteResult = (venue_id, id, history) => {
    axios.delete(`/api/venues/${venue_id}/results/${id}`)
      .then( res => {
        const { results } = this.state
        this.setState({ results: results.filter( r => r.id !== id )})
        history.push('/venues')
      })
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <ResultContext.Provider value={{
        ...this.state,
        getAllResults: this.getAllResults,
        addResult: this.addResult,
        updateResult: this.updateResult,
        deleteResult: this.deleteResult,
      }}>
        { this.props.children }
      </ResultContext.Provider>
    )
  }
}

export default ResultProvider;