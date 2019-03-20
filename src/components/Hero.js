import React from 'react';
import styled from 'styled-components';
import background from './assets/hero-background.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Hero extends React.Component {

  render() {
    return (
      <HeroSection>
        <Container>
          <div>
            <h1>We believe and</h1>
            <h1 className="pink">fight for freedom</h1>

          </div>
        </Container>
      </HeroSection>
    )
  }
}

const HeroSection = styled.section`
  min-height: 600px;
  height: 100vh;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  background: url(${background}) bottom no-repeat;
  background-attachment: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h1 {
    font-family: 'FontBold';
    margin: 0;
    text-align: left;
    color: white;
    font-size: 146px;
  }
  h1.pink {
    color: #ff5d5d;
    background: -webkit-linear-gradient(left, #FF3333, #FF7C56);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text{
    display: inline-block;
    font-size: 15vmin;
    line-height: 1.205;
  }

    .first, .second{
      position: relative;
    }

    .word{
      opacity: 0;
    }

    .first-bg, .second-bg{
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
      transform-origin: left;
      transform: scaleX(0);
    }

    .first-bg{
      background-color: #5fbff9;
    }

    .second-bg{
      background-color: #f06543;
    }

    .second{
      margin-left: 15vmin;
    }
`;
export default Hero;
