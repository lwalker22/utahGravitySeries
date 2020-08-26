import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../images/dh1.jpeg';
import image2 from '../images/dh2.jpeg';
import image3 from '../images/dh3.jpeg';
import image4 from '../images/dh4.jpeg';
import image5 from '../images/dh5.jpeg';
import styled from 'styled-components'



class ImageCarousel extends Component {
  render() {
    return (
      <ImageContainer>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} transitionTime={1000} interval={6000}>
            {/* <div>
                <img src={image1} />
            </div> */}
            <div>
                <img src={image2} />
            </div>
            <div>
              <img src={image3} />
            </div>
            <div>
              <img src={image4} />
            </div>
            <div>
              <img src={image5} />
            </div>
        </Carousel>
      </ImageContainer>
    )
  }
}

export default ImageCarousel;

const ImageContainer = styled.div`
  padding-left: 2em;
  padding-right: 2em;
`;