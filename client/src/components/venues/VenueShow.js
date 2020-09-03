import React, { Component, Fragment } from 'react';
import {VenueConsumer} from '../../providers/VenueProvider';
import VenueForm from './VenueForm'
import { FormContainer, FormHeader1, FormHeader2, FormHeader3} from '../styledComponents/FormStyles';
import { SubmitButton, EditButton, DeleteButton, ButtonDiv1, ButtonDiv2 } from '../styledComponents/CommonStyles';



class VenueShow extends Component {
  state = {editing: false}
  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render () {
    const { id, name, address, date } = this.props.location.state
    const { editing } = this.state
    const { updateVenue, deleteVenue, history } = this.props
    return (
      <FormContainer>
        <FormHeader1>{name}</FormHeader1>
        <FormHeader2>{address}</FormHeader2>
        <FormHeader3>{date}</FormHeader3>
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
          <ButtonDiv1>
            <EditButton onClick={this.toggleUpdate}>
              Edit
            </EditButton>
          </ButtonDiv1>
          }
          <ButtonDiv2>
            <DeleteButton onClick={() => deleteVenue(id, history)}>
              Delete
            </DeleteButton>
          </ButtonDiv2>
      </FormContainer>
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
