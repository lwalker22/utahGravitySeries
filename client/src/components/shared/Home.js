import React from 'react';
import styled from 'styled-components';
import Sponsors from '../sponsors/Sponsors'

const Home = () => (
  <>
    <HomeHeader>
      Utah Gravity Series
    </HomeHeader>
    <div>
      <Sponsors />
    </div>
  </>
)

const HomeHeader = styled.h1`
  text-align: center;
  color: black;
`;
export default Home;