import React from 'react';
import styled from 'styled-components';
import about from './assets/about.gif';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const About = () => (
  <AboutSection>
    <AboutImg src={about} />
    <TextBox>
      <Fade bottom duration="1200" delay="200">
        <h6>
          <span className="grey">—</span> ABOUT ARAGON ONE
        </h6>
      </Fade>
      <Fade bottom duration="1200" delay="400">
        <div>
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
        </div>
      </Fade>
    </TextBox>
  </AboutSection>
);

const AboutImg = styled.img`
  width: 665px;
`
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
`;

export default About;
