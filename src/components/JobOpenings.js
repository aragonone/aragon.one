import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection id="jobs">
    <h6 id="open-application">
      <span className="grey">—</span> OPEN JOB POSITIONS
    </h6>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Open Application"
        category="GENERAL"
        title="Open Application"
        open="open-application"
        link="https://jobs.lever.co/aragonone/be7df0cc-4bb8-4379-b027-03c1d544de5c/apply"
        description="Can't find a role that fits you? It's a privilege to have people interested in working with us and we're always open to meet them to explore opportunities to collaborate. Drop us a line on where you'd like to contribute to and what caught your attention to join Aragon One.">
        <h5>Requirements</h5>
        <ul>
          <li>Very good written communication skills in English. </li>
          <li>Being passionate about decentralization and open source.</li>
          <li>
            Being an autonomous individual with a proactive attitude and a love
            for time self-management.
          </li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Fill this{' '}
            <a
              href="https://jobs.lever.co/aragonone/be7df0cc-4bb8-4379-b027-03c1d544de5c/apply"
              target="_blank">
              form
            </a>{' '}
            with your Linkedin and/or CV, Github profile and any information you
            consider important.
          </li>
        </ul>
      </JobOpening>
    </Slide>
  </JobOpeningsSection>
);

const JobOpeningsSection = styled.section`
  height: auto;
  width: 80%;
  margin: 100px auto;
  a {
    color: #ff7671;
  }
  .label {
    background: #793937;
    padding: 0 5px;
    margin-left: 5px;
  }
  .highlight {
    background: #1b1b1b;
    margin-top: 10px;
    padding: 30px 5px;
    ${medium('padding: 45px;')};
    ul {
      padding-left: 15px;
      ${medium('padding-left: 40px;')};
    }
    ol {
      padding-left: 23px;
      ${medium('padding-left: 40px;')};
    }
  }
`;

export default JobOpenings;
