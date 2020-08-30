import React from 'react';
import email_logo from '../logos/email_logo.jpg';
import fb_logo from '../logos/fb_logo.jpeg';
import insta_logo from '../logos/insta_logo.png';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";


const Footer = () => (
  <Container>
      <a href="mailto:info@utahdh.org" target="blank">
      <img src={email_logo} alt="email_logo" 
        style={{ width: "auto", height: "1.75em" }} />
      </a>
      <a href="https://www.facebook.com/utahgravityseries/" target="blank">
        <img src={fb_logo} alt="fb_logo" style={{ width: "auto", height: "2em" }} />
      </a>
      <a href="https://www.instagram.com/utahgravityseries/" target="blank">
        <img src={insta_logo} alt="insta_logo" style={{ width: "auto", height: "2.5em" }} />
      </a>
  </Container>
)

export default Footer;


const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
`;
