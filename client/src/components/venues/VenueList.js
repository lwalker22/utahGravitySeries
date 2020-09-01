import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { VenueContainer, VenueHeader, VenueLink } from '../styledComponents/VenueStyles';


const VenueList = ({ venues }) => (
  <VenueContainer>
    <VenueHeader>Venues</VenueHeader>
    {
      venues.map( v => 
        <Fragment>
          <VenueLink to={{
            pathname: `/venues/${v.id}`,
            state: {...v}
          }}>
            { v.name }
          </VenueLink>
          <br />
        </Fragment>
      )
    }
  </VenueContainer>
)

export default VenueList;