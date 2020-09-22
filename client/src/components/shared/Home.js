import React from 'react';
import styled from 'styled-components';
import Sponsors from '../sponsors/Sponsors';
import ImageCarousel from './ImageCarousel';

const Home = () => (
  <>
    <Header>
      Utah Gravity Series
    </Header>
    <ImageBoarder>
      <ImageCarousel />
    </ImageBoarder>
    <Text>
      Series Sponsors
    </Text>
    <div>
      <Sponsors />
    </div>
  </>
)

const Header = styled.div`
  text-align: center;
  color: black;
  font-family: 'Helvetica', sans-serif;
  font-weight: 450;
  font-style: italic;
  margin: .5em;
  @media screen and (min-width: 320px) {
    font-size: 1.25em;
  }
  @media screen and (min-width: 360px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 579px) {
    font-size: 3em;
  }
`;

const Text = styled.div`
  text-align: center;
  color: black;
  font-family: 'Helvetica', sans-serif;
  margin: 1em;
  @media screen and (min-width: 320px) {
    font-size: .75em;
  }
  @media screen and (min-width: 360px) {
    font-size: 1em;
  }
  @media screen and (min-width: 579px) {
    font-size: 2em;
  }
`;

const ImageBoarder = styled.img`
  background: black;

`;


export default Home;