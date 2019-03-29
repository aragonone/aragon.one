import React from 'react';
import styled from 'styled-components';
import about from './assets/about.gif';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const large = css => breakpoint('large', css);

const About = () => (
  <AboutSection id="about">
    <AboutImg src={about} />
    <TextBox>
      <Fade bottom duration={1200} delay={200}>
        <h6>
          <span className="grey">—</span> ABOUT ARAGON ONE
        </h6>
      </Fade>
      <Fade bottom duration={1200} delay={400}>
        <div>
          <p>
            Aragon One is a company that encompasses the foundational team
            working on the Aragon project. The company is established in
            Switzerland, although we all work remote.
          </p>
          <p>
            Funding for the company comes from grants given by the project's
            non-profit entity, and was voted and approved by the community.
          </p>
        </div>
      </Fade>
    </TextBox>
  </AboutSection>
);

const AboutImg = styled.img`
  width: 665px;
  max-width: 100%;
`;
const AboutSection = styled.section`
  background-color: #000000;
  min-height: 600px;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${large('flex-direction: row;')};
  padding: 100px 0;
`;

const TextBox = styled.div`
  padding: 100px 10% 0 10%;
  ${large('padding: 0; padding-left: 60px; padding-right: 10%;')};
  p {
    line-height: 1.7;
    font-size: 1.57rem;
    ${large('line-height: 1.5; font-size: 2.28rem;')};
    color: #ffffff;
  }
`;

export default About;
