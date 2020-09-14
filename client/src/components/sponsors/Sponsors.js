import React from 'react';
import logo1 from '../logos/bohemian.jpg';
import logo2 from '../logos/giro.png';
import logo3 from '../logos/goride.jpg';
import logo4 from '../logos/gt_factory.jpg';
import logo5 from '../logos/stanley.png';
import logo6 from '../logos/trp.jpg';
import logo7 from '../logos/truckerco.png';
import styled from 'styled-components'

const Sponsors = () => (
  <SponsorContainer>

    <Layout>
      <div>
        <a href="https://www.go-ride.com/" target="blank">
          <GrImage src={logo3} alt="goride_logo" />
        </a>
      </div>
      <div>
        <a href="https://www.giro.com/" target="blank">
          <GiImage src={logo2} alt="giro_logo" />
        </a>
      </div>
      <div>
        <a href="http://www.bohemianbrewery.com/" target="blank">
          <BhImage src={logo1} alt="bohemian_logo" />
        </a>
      </div>
      <div>
        <a href="http://www.ebaystores.com/TruckerCo-High-Performance-Parts?_rdc=1" target="blank">
          <TcImage src={logo7} alt="truckerco_logo" />
        </a>
      </div>
      <div>
        <a href="https://trpcycling.com/" target="blank">
          <TrpImage src={logo6} alt="trp_logo" />
        </a>
      </div>
      <div>
        <a href="https://www.stanley-pmi.com/" target="blank">
          <StImage src={logo5} alt="stanley_logo" />
        </a>
      </div>
      <div>
        <a href="https://www.gtbicycles.com/usa_en/" target="blank">
          <GtImage src={logo4} alt="gtfactory_logo" />
        </a>
      </div>
    </Layout>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


  </SponsorContainer>
)

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const SponsorContainer = styled.div`
  display: block;
  white-space: pre; 
`;

const GrImage = styled.img`
  @media screen and (min-width: 320px) {
    width: auto;
    height: 2.5em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 3em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 5em;
  }
`;

const GiImage = styled.img`
  @media screen and (min-width: 320px) {
    width: auto;
    height: 1.25em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 1.75em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 2.5em;
  }
`;

const BhImage = styled.img`
  @media screen and (min-width: 320px) {
    width: auto;
    height: 2.5em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 3em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 5em;
  }
`;

const TcImage = styled.img`
  @media screen and (min-width: 320px) {
    width: auto;
    height: 1em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 1em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 1.75em;
  }
`;

const TrpImage = styled.img`
  @media screen and (min-width: 320px) {
    width: auto;
    height: 1.75em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 2em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 3em;
  }
`;

const StImage = styled.img`
  @media screen and (min-width: 320px) {
    width: auto;
    height: 2.5em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 3em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 4.5em;
  }
`;

const GtImage = styled.img`
  @media screen and (min-width: 320px) {
    width: auto;
    height: 1.25em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 1.75em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 3.25em;
  }
`;

export default Sponsors;