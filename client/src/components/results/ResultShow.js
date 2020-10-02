import React, { Component } from 'react';
import ResultForm from './ResultForm';
import { ResultConsumer } from '../../providers/ResultProvider';



class ResultShow extends Component {
  state = { editing: true }

  toggelEdit = () => this.setState({ editing: !this.state.editing })
  
  render() {
    const { year, venue_id, id } = this.props.location.state
    const { updateResult, history } = this.props
    const { editing } = this.state
    return(
      <>
        <h1>{year}</h1>
        { editing ?
            <ResultForm
              venueId={venue_id}
              title={year}
              id={id}
              updateResult={updateResult}
              history={history}
            />
          :
            <button onClick={this.toggleEdit}>
              Edit
            </button>
        }
      </>
    )
  }
}

const ConnectedResultShow = (props) => (
  <ResultConsumer>
    {
      values => <ResultShow {...props} {...values} />
    }
  </ResultConsumer>
)

export default ConnectedResultShow;