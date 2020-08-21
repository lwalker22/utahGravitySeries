import React, { Component } from 'react';
import ResultConsumer from '../../providers/ResultProvider';
import ResultForm from '../results/ResultsForm';
import ResultList from '../results/ResultList';

class Results extends Component {
  componentDidMount () {
    const { getAllResults, venueId } = this.props
    getAllResults(venueId)
  }

  render() {
    const { addResults, venueID, results, deleteResults, history }
    return(
      <>
        <h1>Results:</h1>
        <ResultForm addResult={addResult} resultId={resultId} />
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