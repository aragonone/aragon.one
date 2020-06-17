import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection id="jobs">
    <h6 id="product-designer">
      <span className="grey">—</span> OPEN JOB POSITIONS
    </h6>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Product Designer"
        category="PRODUCT"
        title="Product Designer"
        open="product-designer"
        idprop="javascript-engineer"
        link="https://jobs.lever.co/aragonone/848ed00a-da14-4010-9e71-5e6a7f5c5ee2"
        description={
          <span>
            Great design breaks down barriers between people and products. Tesla
            and Apple introduced millions of people to revolutionary technology
            and established new industries by building better products and user
            experiences. Reaching people is the blockchain ecosystem's biggest
            challenge. The barrier to entry is big, but design can bridge the
            gap. We're looking for a Product Designer to help us reach millions
            of people and shape the future of organizations.
            <br /> You will be a key member of our design team and work
            alongside{' '}
            <a
              href="https://blog.aragon.one/team-interviews-paty-ux-designer/"
              target="_blank">
              Paty
            </a>
            , our Product Designer with a strong UX background, and{' '}
            <a
              href="https://blog.aragon.one/team-interviews-adri-brand-lead-at-aragon-one"
              target="_blank">
              Adri
            </a>
            , our Brand Designer with a strong visual background. We're
            creative, thorough, iterative, and systematic. We've developed{' '}
            <a
              href="https://blog.aragon.org/introducing-aragonds-the-new-aragon-design-system/"
              target="_blank">
              aragonDS
            </a>
            , a design system to ensure consistency and establish a shared
            communication style; with{' '}
            <a href="https://ui.aragon.org/" target="_blank">
              aragonUI
            </a>
            , an{' '}
            <a href="https://github.com/aragon/aragon-ui" target="_blank">
              open-source library of React UI components
            </a>
            . Join us to continue building the leading platform for
            decentralized organizations,{' '}
            <a href="http://poweredby.aragon.org/" target="_blank">
              powering more than 1400 organizations.
            </a>
          </span>
        }>
        <h5>Your first year at Aragon One</h5>
        <ul>
          <li>
            In twelve months, you will help define the product design direction
            and create experiences that enable thousands of new users to easily
            participate in digital organizations together with the product team.
          </li>
          <li>
            During the first three months, you will focus on absorbing as much
            information as possible about the team, Aragon, and the broader Web3
            ecosystem while progressively growing your contributions as you
            become more familiar with the team and subject matter.
          </li>
          <li>
            Around the sixth month, you will be more autonomous, take on complex
            design decisions, and contribute to shaping the design culture at
            Aragon One.
          </li>
        </ul>
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Work with the frontend and product teams to define product roadmaps,
            requirements, and sprints.
          </li>
          <li>
            Work with the design team to create and define specs for components
            to expand the{' '}
            <a
              href="https://blog.aragon.org/introducing-aragonds-the-new-aragon-design-system/"
              target="_blank">
              aragonDS
            </a>
            .
          </li>
          <li>
            Research, prototype, and develop designs from concept to
            implementation for{' '}
            <a href="https://app.aragon.org" target="_blank">
              Aragon Client
            </a>
            ,{' '}
            <a href="https://court.aragon.org" target="_blank">
              Aragon Court
            </a>
            , and{' '}
            <a
              href="https://https://blog.aragon.one/aragon-agreements/"
              target="_blank">
              Agreements
            </a>
            .
          </li>
          <li>
            Ensure our products follow design best practices from accessibility
            to common human interface guidelines.
          </li>
        </ul>
        <h5>You are someone who can</h5>
        <ul>
          <li>
            Prove previous experience working with platforms, back-office, or
            systems design.
          </li>
          <li>
            Write design specifications documenting your design decisions and
            user flows in a written and visual format.
          </li>
          <li>
            Apply accessibility best practices: you pay attention to product
            colors, navigation, contrast, and different end-users.
          </li>
          <li>
            Contribute to the creation of new UI components, define guidelines
            and specifications for their usage, help with the maintenance of the
            overall system.
          </li>
          <li>
            Communicate with the engineering, business development, and
            communications teams.
          </li>
          <li>
            Being an autonomous individual with a proactive attitude and a love
            for time self-management. We work focus-driven, not hours-driven.
          </li>
        </ul>
        <h5>Nice to have</h5>
        <ul>
          <li>
            Previous experience contributing to or managing open source
            projects.
          </li>
          <li>Previous experience working remotely.</li>
          <li>Very good written communication skills in English.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Fill this{' '}
            <a
              href="https://jobs.lever.co/aragonone/848ed00a-da14-4010-9e71-5e6a7f5c5ee2/apply"
              target="_blank">
              form
            </a>{' '}
            with your Linkedin and/or CV, Portfolio and any information you
            consider important.
          </li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Javascript Engineer"
        category="ENGINEERING"
        title="Javascript Engineer"
        open="javascript-engineer"
        idprop="open-application"
        link="https://jobs.lever.co/aragonone/1c635748-4c59-4bbf-84ff-59d7754ca32d"
        description="We're looking for a Javascript Engineer to research, experiment, and build robust Javascript libraries to interact with the Ethereum blockchain.">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Take ownership of the development and maintenance of aragon.js, the
            interface between smart contracts and the native web experience.
          </li>
          <li>
            Research and experiment with new Web3 technologies, including but
            not limited to Web3.js and Parity systems.
          </li>
          <li>Help to create developer tools and technical documentation.</li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>Track record working with backend Javascript environments.</li>
          <li>
            Experience working with modern JavaScript tools like ES6+, Node,
            React, resource optimization, development tools, and service APIs.
          </li>
          <li>
            Proven ability to ship quality, well-crafted code within tight
            deadlines.
          </li>
          <li>Being passionate about open source and decentralization.</li>
          <li>
            Being an autonomous individual with a proactive attitude and a love
            for time self-management. We work focus-driven, not hours-driven.
          </li>
        </ul>
        <h5>Nice to have</h5>
        <ul>
          <li>
            Previous experience contributing to or managing open source
            projects.
          </li>
          <li>Previous experience working remotely.</li>
          <li>Very good written communication skills in English.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Fill this{' '}
            <a
              href="https://jobs.lever.co/aragonone/1c635748-4c59-4bbf-84ff-59d7754ca32d/apply"
              target="_blank">
              form
            </a>{' '}
            with your Linkedin and/or CV, Github profile and any information you
            consider important.
          </li>
        </ul>
      </JobOpening>
    </Slide>
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
