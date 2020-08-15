import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Fragment>
    <Link to ='/'>
      Home
    </Link>
      <Link to ='/about'>
      About
    </Link>
      <Link to ='/venues'>
      Venues
    </Link>
  </Fragment>
)
export default Navbar;