import React from 'react';
import styled from 'styled-components';
import background from './assets/swiss.jpg';
import Photos from './Photos';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Company = () => (
  <CompanySection>
    <Container>
      <BreakPoint from="medium">
        <Fade bottom duration={1200} delay={200}>
          <h1>Based in the</h1>
          <h1>Crypto Valley,</h1>
          <h1 className="pink">Switzerland</h1>
        </Fade>
      </BreakPoint>
      <BreakPoint to="medium">
        <Fade bottom duration={1200} delay={200}>
          <h1>Based in the Crypto Valley,</h1>
          <h1 className="pink"> Switzerland</h1>
        </Fade>
      </BreakPoint>
      <Photos />
    </Container>
  </CompanySection>
);

const CompanySection = styled.section`
  min-height: 600px;
  height: auto;
  background: url(${background}) top no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  padding-top: 50px;
  h1 {
    font-family: 'FontBold';
    word-break: break-word;
    margin: 0;
    text-align: left;
    color: white;
    line-height: 1.2;
    font-size: 3.85rem;
    ${medium('font-size: 8.92rem; line-height: 1.1;')};
    color: #ffffff;
  }
  .pink {
    color: #ff5d5d;
  }
  ${medium('padding-top: 200px;')};
`;
export default Company;
