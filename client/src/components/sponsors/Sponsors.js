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
  <Layout>
    <div>
      <a href="https://www.go-ride.com/" target="blank">
        <img src={logo3} alt="goride_logo" style={{ width: "auto", height: "6em"}} />
      </a>
    </div>
    <div>
      <a href="https://www.giro.com/" target="blank">
        <img src={logo2} alt="giro_logo" style={{ width: "auto", height: "2em"}} />
      </a>
    </div>
    <div>
      <a href="http://www.ebaystores.com/TruckerCo-High-Performance-Parts?_rdc=1" target="blank">
        <img src={logo7} alt="truckerco_logo" style={{ width: "auto", height: "1em"}} />
      </a>
    </div>
    <div>
      <a href="https://trpcycling.com/" target="blank">
        <img src={logo6} alt="trp_logo" style={{ width: "auto", height: "3em"}} />
      </a>
    </div>
    <div>
      <a href="http://www.bohemianbrewery.com/" target="blank">
        <img src={logo1} alt="bohemian_logo" style={{ width: "auto", height: "6em"}} />
      </a>
    </div>
    <div>
      <a href="https://www.stanley-pmi.com/" target="blank">
        <img src={logo5} alt="stanley_logo" style={{ width: "auto", height: "5em"}} />
      </a>
    </div>
    <div>
      <a href="https://www.gtbicycles.com/usa_en/" target="blank">
        <img src={logo4} alt="gtfactory_logo" style={{ width: "auto", height: "3em"}} />
      </a>
    </div>
  </Layout>
)

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default Sponsors;