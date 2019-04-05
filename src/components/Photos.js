import React from 'react';
import styled from 'styled-components';
import photo1 from './assets/company/photo1.png';
import photo2 from './assets/company/photo2.png';
import photo3 from './assets/company/photo3.png';
import photo4 from './assets/company/photo4.png';
import photo5 from './assets/company/photo5.png';
import photo6 from './assets/company/photo6.png';
import photo7 from './assets/company/photo7.png';
import photo8 from './assets/company/photo8.png';
import photo9 from './assets/company/photo9.png';
import photo10 from './assets/company/photo10.png';
import photo11 from './assets/company/photo11.png';
import photo12 from './assets/company/photo12.png';
import photo13 from './assets/company/photo13.png';
import photo14 from './assets/company/photo14.png';
import photo15 from './assets/company/photo15.png';
import photo16 from './assets/company/photo16.png';
import Carousel from 'react-bootstrap/Carousel';
import arrow from './assets/arrow.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Photos extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <PhotosSection>
        <Container>
          <Carousel interval={null} pauseOnHover="true" nextIcon={<img src={arrow} />}>
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
            <Carousel.Item>
              <PhotosContainer>
                <img src={photo7} />
                <img src={photo8} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={photo9} />
                <img src={photo10} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={photo11} />
                <img src={photo12} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={photo13} />
                <img src={photo14} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={photo15} />
                <img src={photo16} />
              </PhotosContainer>
            </Carousel.Item>
          </Carousel>
        </Container>
      </PhotosSection>
    );
  }
}

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
  flex-direction: column;
  ${large('flex-direction: row;')};
  img {
    width: 100%;
    margin: 20px 0;
    ${large('width: calc(50% - 20px); margin: 0;')};
  }
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
`;
export default Photos;
