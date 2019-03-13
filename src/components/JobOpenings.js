import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection>
    <h6>
      <span className="grey">—</span> OPEN JOBS POSITIONS
    </h6>
    <JobOpening/>
    <JobOpening/>
    <JobOpening/>
    <JobOpening/>
    <JobOpening/>
    <JobOpening/>
  </JobOpeningsSection>
);

const JobOpeningsSection = styled.section`
  height: auto;
  width: 80%;
  margin: 100px auto;
`;

export default JobOpenings;
