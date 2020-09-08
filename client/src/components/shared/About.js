import React from 'react';
import styled from 'styled-components';

const About = () => (
  <Container>
    <P1Style> This series takes place in the Intermountain West with venues spanning from Southern Utah to Eastern Idaho. Offering racing categories from beginner to professional in both
      <AStyle href="https://en.wikipedia.org/wiki/Downhill_mountain_biking" target="blank">
        &nbsp;Downhill&nbsp;
      </AStyle> 
        and
      <AStyle href="https://en.wikipedia.org/wiki/Enduro_(mountain_biking)" target="blank">
        &nbsp;Super-D
      </AStyle> 
        &nbsp;this series offers some of America’s best gravity racing.
    </P1Style>
    <P2Style>
      For more Utah Gravity Series info visit
      <AStyle href="https://www.go-ride.com/" target="blank"> 
        &nbsp;Go-Ride 
      </AStyle>
        &nbsp;or contact us at
      <AStyle href="mailto:info@utahdh.org" target="blank">
        &nbsp;info@utahdh.org
      </AStyle>
    </P2Style>
  </Container>
)

export default About;

const Container = styled.div`
  margin: calc(2em + 1vw);
  text-align: justify;

`;

const P1Style = styled.p`
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: calc(1em + 1vw)

`;

const P2Style = styled.p`
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: calc(1em + 1vw)

`;

const AStyle = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 550;
`;


