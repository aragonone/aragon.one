import React from 'react';
import styled from 'styled-components';
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
    const {index, direction} = this.state;
    return (
      <PhotosSection>
        <Container>
          <Carousel
            interval={null}
            pauseOnHover="true"
            nextIcon={<img src={arrow} />}>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo1.png`)} />
                <img src={require(`./assets/company/photo2.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo3.png`)} />
                <img src={require(`./assets/company/photo4.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo5.png`)} />
                <img src={require(`./assets/company/photo6.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo7.png`)} />
                <img src={require(`./assets/company/photo8.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo9.png`)} />
                <img src={require(`./assets/company/photo10.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo11.png`)} />
                <img src={require(`./assets/company/photo12.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo13.png`)} />
                <img src={require(`./assets/company/photo14.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo15.png`)} />
                <img src={require(`./assets/company/photo16.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo17.png`)} />
                <img src={require(`./assets/company/photo18.png`)} />
              </PhotosContainer>
            </Carousel.Item>
            <Carousel.Item>
              <PhotosContainer>
                <img src={require(`./assets/company/photo19.png`)} />
                <img src={require(`./assets/company/photo20.png`)} />
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
