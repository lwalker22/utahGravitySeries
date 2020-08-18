import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/sprocket.jpg';
// import { Image } from 'semantic-ui-react'

const Navbar = () => (
  <NavContainer>
    <ImageContainer>
    <Link to ='/'>
      <img src={logo} alt='logo' style={{ width: "auto", height: "3em"}} />
    </Link>
    </ImageContainer>
    <LinkContainer>
      <Link to ='/about'style={{ textDecoration: 'none' }}>
        About
      </Link>
    </LinkContainer>
    <LinkContainer>
    <Link to ='/venues' style={{ textDecoration: 'none' }}>
      Venues
    </Link>
    </LinkContainer>
  </NavContainer>
)

const NavContainer = styled.div`
  background: white;
  border-radius: 2px;
  border: 5px solid black;
  color: black;
  padding: .1em;
`;

const ImageContainer = styled.div`
  display: inline-block;
  boarder: solid;
  margin-left: .5em;
  margin-right: .5em;
  margin-top: .5em;
  margin-bottom: .5em;
`;

const LinkContainer = styled.h2`
  display: inline-block;
  boarder: solid;
  postion: absolute;
  margin-left: .5em;
  margin-right: .5em;
  font-size: 20px;
`;

export default Navbar;


{/* <ImageProp> */}
{/* <img src={logo} alt='logo' style={{ width: "auto", height: "3em"}} /> */}
{/* </ImageProp> */}