import React from 'react';
import styled from 'styled-components';
import Sponsors from '../sponsors/Sponsors';
import ImageCarousel from './ImageCarousel';

const Home = () => (
  <>
    <Header>
      Utah Gravity Series
    </Header>
    <div>
      <ImageCarousel />
    </div>
    <Body>
      <h3>Series Sponsors</h3>
    </Body>
    <div>
      <Sponsors />
    </div>
  </>
)

const Header = styled.h1`
  text-align: center;
  color: black;
  font-family: marker felt;
`;

const Body = styled.h3`
  text-align: center;
  color: black;
  font-family: marker felt;
`;


export default Home;