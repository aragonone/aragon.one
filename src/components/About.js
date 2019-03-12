import React from 'react';
import styled from 'styled-components';
import about from './assets/about.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const About = () => (
  <AboutSection>
    <img src={about} />
    <TextBox>
      <h6>
        <span className="grey">—</span> ABOUT ARAGON ONE
      </h6>
      <p>
        Aragon One is a company that encompasses the foundational team working
        on the Aragon project. The company is currently established in
        Switzerland, although we want it to function as a DAO as much as
        possible.
      </p>
      <p>
        Funding for the company will come in a form of a grant given by the
        project's non-profit entity, in similar terms to the ones that the
        entity.
      </p>
    </TextBox>
  </AboutSection>
);

const AboutSection = styled.section`
  background-color: #000000;
  min-height: 600px;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
`;

const TextBox = styled.div`
  padding-left: 60px;
  padding-right: 10%;
  p {
    line-height: 48px;
    font-size: 32px;
    color: #ffffff;
  }
  h6 {
    font-family: 'FontRegular';
    font-size: 14px;
    letter-spacing: 2.6px;
    line-height: 1;
    margin: 0 0 70px 0;
    .grey {
      color: #525252;
    }
  }
`;

export default About;
