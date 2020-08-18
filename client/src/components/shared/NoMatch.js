import React from 'react';
import { Link } from 'react-router-dom';
// import image from '../images/sprocket.jpg'

const NoMatch = () => (
  <>
    <div>
      <h1>404 page not found</h1>
    </div>
    <Link to='home'>Return Home</Link>
  </>
)

export default NoMatch;