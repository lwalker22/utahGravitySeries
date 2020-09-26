import React, { Fragment, Component } from 'react';
import { VenueConsumer } from '../../providers/VenueProvider';
import VenueForm from './VenueForm';
import VenueList from './VenueList';
import { FormContainer, FormHeader1, FormHeader2, FormHeader3} from '../styledComponents/FormStyles';
import { AddButton } from '../styledComponents/ButtonStyles';
import { VenueContainer, VenueHeader, VenueLink } from '../styledComponents/VenueStyles';



class Venues extends Component {
  state = { adding: true, formValues: { name: '', address: '', date: '', }, };
  toggleUpdate = () => this.setState({ adding: !this.state.adding })

  
  toggleAdd = () => {
    this.setState( state => {
      return { adding: !state.adding, };
    })
  }
  render() {
    const { adding } = this.state
    return(
      <>
      {/* <FormContainer> */}
        { adding ? <AllVenues /> : <AddVenue /> }
      <AddButton
        onClick={this.toggleAdd}> { adding ? 'Add Venue' : 'Back to Venues' }
      </AddButton>
      {/* </FormContainer> */}
      </>
    );
  }

}
                                  
const AllVenues = () => (
  <VenueConsumer> 
    {
      value => (
        <Fragment>
          <VenueList venues={value.venues} />
        </Fragment>
      )
    }
  </VenueConsumer>
)

const AddVenue = () => (
  <VenueConsumer> 
    {
      value => (
        <Fragment>
          <VenueForm addVenue={value.addVenue} />
        </Fragment>
      )
    }
  </VenueConsumer>
)

export default Venues;