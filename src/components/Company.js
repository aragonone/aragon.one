import React from 'react';
import styled from 'styled-components';
import background from './assets/company-background.png';
import Photos from './Photos';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Company = () => (
  <CompanySection>
    <Container>
      <Fade bottom duration="1200" delay="200">
        <h1>The company is</h1>
        <h1>currently</h1>
        <h1>established in</h1>
        <h1 className="pink">Switzerland</h1>
      </Fade>
      <Photos />
    </Container>
  </CompanySection>
);

const CompanySection = styled.section`
  min-height: 600px;
  height: 180vh;
  background: url(${background}) top no-repeat;
  background-size: contain;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  padding-top: 200px;
  h1 {
    font-family: 'FontBold';
    margin: 0;
    text-align: left;
    color: white;
    line-height: 132px;
    font-size: 125px;
    color: #ffffff;
  }
  h1.pink {
    color: #ff5d5d;
  }
`;
export default Company;
