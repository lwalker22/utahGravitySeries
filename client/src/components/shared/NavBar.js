import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logos/sprocket.jpg';
// import { Image } from 'semantic-ui-react'

const Navbar = () => (
  <NavContainer>
    <LeftLayout>
    <div>
    <Link to ='/'>
      <img src={logo} alt='logo' style={{ width: "auto", height: "3em"}} />
    </Link>
    </div>
    <div>
      <Link to ='/about'style={{ textDecoration: 'none', margin: "1em", color: "white" }}>
        About
      </Link>
    </div>
    <div>
    <Link to ='/venues' style={{ textDecoration: 'none', margin: ".5em", color: "white" }}>
      Venues
    </Link>
    </div>
    </LeftLayout>
  </NavContainer>
)

const NavContainer = styled.div`
  background: black;
  border-radius: none;
  border: 3px solid black;
  color: white;
`;

const LeftLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;


export default Navbar;