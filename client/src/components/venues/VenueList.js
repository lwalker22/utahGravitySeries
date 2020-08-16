import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const VenueList = ({ venues }) => (
  <Fragment>
    <h1>Venues:</h1>
    {
      venues.map( v => 
        <Fragment>
          <Link to={{
            pathname: `/venues/${v.id}`,
            state: {...v}
          }}>
            { v.name }
          </Link>
          <br />
        </Fragment>
      )
    }
  </Fragment>
)

export default VenueList;