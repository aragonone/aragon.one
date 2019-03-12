import React from 'react'
import styled from 'styled-components'
import background from './assets/hero-background.svg'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)


const Hero = () => (
    <HeroSection>
      <Container>
        <div>
          <h1>We believe and</h1>
          <h1 className="pink">fight for freedom</h1>
        </div>
      </Container>
    </HeroSection>
)

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
  justify-content: center;
  h1 {
    font-family: 'FontBold';
    margin: 0;
    text-align: left;
    color: white;
    font-size: 132px;
  }
  h1.pink {
    color: #FF5D5D;
  }
`;
export default Hero
