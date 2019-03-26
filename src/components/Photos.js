import React from 'react';
import styled from 'styled-components';
import photo1 from './assets/company/photo1.png';
import photo2 from './assets/company/photo2.png';
import photo3 from './assets/company/photo3.png';
import photo4 from './assets/company/photo4.png';
import photo5 from './assets/company/photo5.png';
import photo6 from './assets/company/photo6.png';
import Carousel from 'react-bootstrap/Carousel';
import arrow from './assets/arrow.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Photos = () => (
  <PhotosSection>
    <Container>
      <Carousel nextIcon={<img src={arrow} />}>
        <Carousel.Item>
          <PhotosContainer>
            <img src={photo1} />
            <img src={photo2} />
          </PhotosContainer>
        </Carousel.Item>
        <Carousel.Item>
          <PhotosContainer>
            <img src={photo3} />
            <img src={photo4} />
          </PhotosContainer>
        </Carousel.Item>
        <Carousel.Item>
          <PhotosContainer>
            <img src={photo5} />
            <img src={photo6} />
          </PhotosContainer>
        </Carousel.Item>
      </Carousel>
    </Container>
  </PhotosSection>
);

const PhotosSection = styled.section`
  padding: 100px 0 200px 0;
  overflow: hidden;
  .carousel-indicators {
    display: none;
  }
`;

const PhotosContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: calc(50% - 20px);
  }
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
`;
export default Photos;
