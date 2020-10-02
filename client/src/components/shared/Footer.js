import React from 'react';
import email_logo from '../logos/email_logo.jpg';
import fb_logo from '../logos/fb_logo.jpeg';
import insta_logo from '../logos/insta_logo.png';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";


const Footer = () => (
    <FootContainer1>
      <a href="mailto:info@utahdh.org" target="blank">
        <LeftImage src={email_logo} alt="email_logo"/>
      </a>
      <RightImages>
      <a href="https://www.facebook.com/utahgravityseries/" target="blank">
        <RightFirstImage src={fb_logo} alt="fb_logo" />
      </a>
      <a href="https://www.instagram.com/utahgravityseries/" target="blank">
        <RightSecondImage src={insta_logo} alt="insta_logo" />
      </a>
      </RightImages>
    </FootContainer1>
)

export default Footer;


const FootContainer1 = styled.div`
  background-color: black;
  overflow: hidden;
  position: relative;
  bottom: 0;
  width: 100%;
`;
const RightImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LeftImage = styled.img`
  width: auto;
  height: 1em;
  padding: 1.5em;
  float: left;
  margin: 0em;
`;

const RightFirstImage = styled.img`
  width: auto;
  height: 1.2em;
  padding: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightSecondImage = styled.img`
  width: auto;
  height: 1.75em;
  padding: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// const FootContainer = styled.div`
//   background-color: black;
//   overflow: hidden;
//   position: fixed;
//   left: 0;
//   bottom: 0;
//   right: 0;
// `;
