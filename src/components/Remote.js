import React from 'react';
import styled from 'styled-components';
import background from './assets/map.gif';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <Container>
      <h6>
        <span className="grey">—</span> A COMPLETE REMOTE TEAM
      </h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Container>
  </HeroSection>
);

const HeroSection = styled.section`
  min-height: 600px;
  height: auto;
  background: url(/static/a9fd696c-map.gif) top right no-repeat;
  background-size: 60%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  h6 {
    margin: 0 0 30px 0!important;
  }
  p {
    font-family: 'FontRegular';
    line-height: 48px;
    font-size: 32px;
    max-width: 40%;
  }
`;
export default Hero;
