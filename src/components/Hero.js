import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import background from './assets/hero-background.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Hero extends React.Component {
  render() {
    return (
      <HeroSection>
        <Navbar />
        <Container>
          <div>
            <h1>We believe and <span className="pink">fight for freedom</span></h1>
          </div>
        </Container>
      </HeroSection>
    );
  }
}

const HeroSection = styled.section`
  min-height: 600px;
  height: 70vh;
  background: url(${background}) bottom no-repeat;
  background-size: cover;
  ${medium('height: 100vh; background-size: contain;')};
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h1 {
    font-family: 'FontBold';
    margin: 0;
    text-align: left;
    color: white;
    font-size: 4.28rem;
    ${medium('font-size: 8rem;')};
    ${large('font-size: 10.43rem;')};
  }
  span.pink {
    color: #ff5d5d;
    background: -webkit-linear-gradient(left, #ff3333, #ff7c56);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default Hero;
