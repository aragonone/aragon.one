import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection>
    <h6>
      <span className="grey">—</span> OPEN JOBS POSITIONS
    </h6>
    <Slide bottom duration={1200}>
      <JobOpening/>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening/>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening/>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening/>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening/>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening/>
    </Slide>
  </JobOpeningsSection>
);

const JobOpeningsSection = styled.section`
  height: auto;
  width: 80%;
  margin: 100px auto;
`;

export default JobOpenings;
