import React from 'react';
import email_logo from '../logos/email_logo.jpg';
import fb_logo from '../logos/fb_logo.jpeg';
import insta_logo from '../logos/insta_logo.png';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";


const Footer = () => (
    <FootContainer>
      <a href="mailto:info@utahdh.org" target="blank">
        <LeftImage src={email_logo} alt="email_logo"/>
      </a>
      <a href="https://www.facebook.com/utahgravityseries/" target="blank">
        <RightFirstImage src={fb_logo} alt="fb_logo" />
      </a>
      <a href="https://www.instagram.com/utahgravityseries/" target="blank">
        <RightSecondImage src={insta_logo} alt="insta_logo" />
      </a>
    </FootContainer>
)

export default Footer;


const FootContainer = styled.div`
  background-color: black;
  overflow: hidden;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 2.5rem; 
  padding: .5em;
`;

const LeftImage = styled.img`
  width: auto;
  height: 1em;
  padding: 1em;
  float: left;
  margin: 0em;
`;

const RightFirstImage = styled.img`
  width: auto;
  height: 1.1em;
  padding: 0em;
  margin: 1em;
  float: right;
`;

const RightSecondImage = styled.img`
  width: auto;
  height: 1.75em;
  padding: .75em;
  margin: 0em;
  float: right;
`;

// const FootContainer = styled.div`
//   background-color: black;
//   overflow: hidden;
//   position: fixed;
//   left: 0;
//   bottom: 0;
//   right: 0;
// `;
