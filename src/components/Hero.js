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
            <h1 className="fist-title">We believe and</h1>
            <h1 className="second-title">
              <span className="pink">fight for freedom</span>
            </h1>
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
  .fist-title,
  .fist-title::after {
    animation-delay: var(--animation-delay, 1s);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 600ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  .second-title, .second-title::after {
    animation-delay: var(--animation-delay, 1.5s);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 600ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  .fist-title {
    position: relative;
    animation-name: clip-text;
    max-width: 90vw;

    &::after {
      content: '';
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ff7c56;
      transform: scaleX(0);
      transform-origin: 0 50%;
      pointer-events: none;
      animation-name: text-revealer;
    }
  }
  .second-title {
    position: relative;
    animation-name: clip-text2;
    max-width: 90vw;

    &::after {
      content: '';
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #FF5D5D;
      transform: scaleX(0);
      transform-origin: 0 50%;
      pointer-events: none;
      animation-name: text-revealer2;
    }
  }

  @keyframes clip-text {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes text-revealer {
    0%,
    50% {
      transform-origin: 0 50%;
    }

    60%,
    100% {
      transform-origin: 100% 50%;
    }

    60% {
      transform: scaleX(1);
    }

    100% {
      transform: scaleX(0);
    }
  }

  @keyframes clip-text2 {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes text-revealer2 {
    0%,
    50% {
      transform-origin: 0 50%;
    }

    60%,
    100% {
      transform-origin: 100% 50%;
    }

    60% {
      transform: scaleX(1);
    }

    100% {
      transform: scaleX(0);
    }
  }

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
