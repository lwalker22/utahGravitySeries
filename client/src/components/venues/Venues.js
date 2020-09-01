import React, { Fragment } from 'react';
import { VenueConsumer } from '../../providers/VenueProvider';
import VenueForm from './VenueForm';
import VenueList from './VenueList';


const Venues = () => (
  <VenueConsumer> 
    {
      value => (
        <Fragment>
          <VenueForm addVenue={value.addVenue} />
          <VenueList venues={value.venues} />
        </Fragment>
      )
    }
  </VenueConsumer>
)

export default Venues;