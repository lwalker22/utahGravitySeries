import React, { Component, Fragment } from 'react';
import {VenueConsumer} from '../../providers/VenueProvider';
import VenueForm from './VenueForm'

class VenueShow extends Component {
  state = {editing: false}
  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render () {
    const { id, name, address, date } = this.props.location.state
    const { editing } = this.state
    const { updateVenue, deleteVenue, history } = this.props
    return (
      <Fragment>
        <h1>Name</h1>
        <h3>Address</h3>
        <h3>Date</h3>
        { editing ?
            <VenueForm
              id={id}
              name={name}
              address={address}
              date={date}
              updateVenue={updateVenue}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <button onClick={this.toggleUpdate}>
            Edit
          </button>
        }
        <button onClick={() => deleteVenue(id, history)}>
          Delete
        </button>
      </Fragment>
    )
  }
}

const ConnectVenueShow = (props) => (
  <VenueConsumer>
    { value => (
      <VenueShow
      {...props}
      updateVenue={value.updateVenue}
      deleteVenue={value.deleteVenue}
      />
    )}
  </VenueConsumer>
)

export default ConnectVenueShow;