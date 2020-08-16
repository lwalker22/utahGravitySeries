import React, { Fragment } from 'react';
import { VenueConsumer } from '../../providers/VenueProvider';
import VenueForm from './VenueForm';
import VenueList from './VenueList';


const Venues = () => (
  <VenueConsumer> 
    {
      value => (
        <Fragment>
          <h1>Venues</h1>
          <VenueForm addVenue={value.addVenue} />
          <VenueList venues={value.venues} />
        </Fragment>
      )
    }
  </VenueConsumer>
)

export default Venues;