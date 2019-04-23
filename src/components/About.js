import React from 'react';
import styled from 'styled-components';
import about from './assets/about.gif';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const About = () => (
  <AboutSection id="about">
    <AboutImg src={about} />
    <TextBox>
      <BreakPoint to="medium">{title}</BreakPoint>
      <BreakPoint from="medium">
        <Fade bottom duration={1200} delay={200}>
          {title}
        </Fade>
      </BreakPoint>
      <div>
        <BreakPoint to="medium">{text1}</BreakPoint>
        <BreakPoint from="medium">
          <Fade bottom duration={1200} delay={400}>
            {text1}
          </Fade>
        </BreakPoint>
        <BreakPoint to="medium">{text2}</BreakPoint>
        <BreakPoint from="medium">
          <Fade bottom duration={1200} delay={400}>
            {text2}
          </Fade>
        </BreakPoint>
      </div>
    </TextBox>
  </AboutSection>
);

const title = (
  <h6>
    <span className="grey">—</span> ABOUT ARAGON ONE
  </h6>
);

const text1 = (
  <p>
    Aragon One is a Swiss company formed by the founders of the{' '}
    <a href="https://aragon.org" target="_blank">
      Aragon project
    </a>
    , building the tools and community necessary for the project to succeed.
  </p>
);
const text2 = (
  <p>
    The company is funded primarily through grants given by the Aragon
    Association, the non-profit steward of the Aragon project.
  </p>
);
const AboutImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  ${medium('height: 34vw; width: auto;')};
`;
const AboutSection = styled.section`
  background-color: #000000;
  min-height: 600px;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  padding: 100px 0;
  a {
    color: #ff7671;
    text-decoration: none;
  }
`;

const TextBox = styled.div`
  padding: 100px 10% 0 10%;
  ${medium('padding: 0; padding-left: 60px; padding-right: 10%;')};
  p {
    line-height: 1.7;
    font-size: 1.57rem;
    ${medium('line-height: 1.5; font-size: 2.28rem;')};
    color: #ffffff;
  }
`;

export default About;
