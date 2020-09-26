import React from 'react';
import styled from 'styled-components';
import Sponsors from '../sponsors/Sponsors';
import ImageCarousel from './ImageCarousel';

const Home = () => (
  <>
    {/* <HeaderContainer> */}
      <Header>
        Utah Gravity Series
      </Header>
    {/* </HeaderContainer> */}
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
  color: grey;
  text-align: center;
  background-image: linear-gradient(to right, black, black, grey, white );
  font-family: 'Zilla Slab', serif;
  font-weight: 450;
  font-style: italic;
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

// const Header = styled.h1`
//   font-size: 72px;
//   background: -webkit-linear-gradient(to right, black, black, grey, white);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

const Text = styled.div`
  text-align: center;
  color: black;
  font-family: 'Zilla Slab', serif;
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

const ImageBoarder = styled.div`
  background: black;
  padding: 1em;

`;


export default Home;