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
        <h1>{name}</h1>
        <h2>{address}</h2>
        <h3>{date}</h3>
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

const ConnectedVenueShow = (props) => (
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

export default ConnectedVenueShow;