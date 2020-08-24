import React, { Component } from 'react';
import ResultConsumer from '../../providers/ResultProvider';
import ResultForm from './ResultForm';
import ResultList from './ResultList';
import { VenueConsumer } from '../../providers/VenueProvider'

class Results extends Component {
  componentDidMount () {
    const { getAllResults, venueId } = this.props
    getAllResults(venueId)
  }

  render() {
    const { addResult, venueId, results, deleteResult, history } = this.props
    return(
      <>
        <h1>Results:</h1>
        <ResultForm addResult={addResult} resultId={venueId} />
        <ResultList
          results={results}
          deleteResult={deleteResult}
          history={history}
        />
      </>
    )
  }
}

const ConnectedResults = (props) => (
  <ResultConsumer>
    {
      values => <Results {...props} {...values} />
    }
  </ResultConsumer>
)

export default ConnectedResults;