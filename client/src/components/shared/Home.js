import React from 'react';
import styled from 'styled-components';
import Sponsors from '../sponsors/Sponsors';
import ImageCarousel from './ImageCarousel';

const Home = () => (
  <>
    <HomeHeader>
      Utah Gravity Series
    </HomeHeader>
    <div>
      <ImageCarousel />
    </div>
    <div>
      <Sponsors />
    </div>
  </>
)

const HomeHeader = styled.h1`
  text-align: center;
  color: black;
  font-family: marker felt;
`;


export default Home;