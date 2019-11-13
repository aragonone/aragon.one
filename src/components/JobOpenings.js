import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection id="jobs">
    <h6 id="javascript-engineer">
      <span className="grey">—</span> OPEN JOBS POSITIONS
    </h6>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Javascript Engineer"
        category="ENGINEERING"
        title="Javascript Engineer"
        open="javascript-engineer"
        idprop="head-of-support"
        description="We’re looking for a Javascript Engineer to help us interface smart contracts with the frontend using Web3 technologies. Our Javascript Engineer must be someone excited about Web3 and experimenting and researching in new dev tools and libraries. You'll work directly with our Dev Lead and other Aragon teams and community contributors.">
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
          <li>
            Assist with smart contracts and frontend development when needed.
          </li>
          <li>Help to create developer tools and technical documentation.</li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>Track record working with Javascript environments.</li>
          <li>
            Experience working with Modern JavaScript (ES6+) and Web APIs, CSS,
            React (Web and Native), resource optimization, development tools, and service APIs.
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
          <li>Very good written communication skills.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with your Linkedin and/or CV, Github profile and any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">
              Javascript Engineer application
            </span>
            .
          </li>
          <li>
            Bonus: Why did Aragon catch your attention?
          </li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Head of Support"
        category="COMMS"
        title="Head of Support"
        open="head-of-support"
        idprop="ui-engineer"
        description="We are looking for a Head of Support who is dedicated to helping users solve their problems with clarity, efficiency, and professionalism. You will own the creation of user-facing product documentation and be responsible for the timely resolution of help desk inquiries. Our Head of Support will play an important part in ensuring success for Aragon users as they build and run their organizations.">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Document all user-facing features in the frontend client, as well as
            bugs and feature requests surfaced by product usage and help desk
            tickets.
          </li>
          <li>
            Create educational tutorials and walkthrough videos and articles to
            demonstrate different ways to safely and successfully use the Aragon
            client.
          </li>
          <li>
            Resolve help desk tickets in a timely manner with consistently high
            satisfaction ratings.
          </li>
          <li>
            Establish and maintain policies and workflows that enable the
            support system to scale across multiple channels.
          </li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>
            Previous experience in a technical support or customer success type
            of role.
          </li>
          <li>Strategic mindset and ability to execute quickly.</li>
          <li>Very good written and spoken communication skills in English.</li>
          <li>Being highly organized, analytical, and detail-oriented.</li>
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
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with your LinkedIn, CV, Twitter and/or Medium profiles, plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Head of Support application</span>.
          </li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="UI Engineer"
        category="ENGINEERING"
        title="UI Engineer"
        open="ui-engineer"
        idprop="solidity-engineer"
        description="We're looking for a UI Engineer with a love for beautiful, well-crafted interfaces. You'll work with our frontend team building Aragon Court, Aragon Client, and Aragon UI.">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Develop, ship, and maintain the{' '}
            <a href="https://github.com/aragon/aragon-ui" target="_blank">
              Aragon UI
            </a>
            , an Aragon-native toolkit of React UI components for decentralized apps, based on the{' '}
            <a href="https://hack.aragon.org/docs/layout.html" target="_blank">
              Aragon Design System
            </a>
            .
          </li>
          <li>
            Develop, ship, and maintain quality interfaces for the{' '}
            <a href="https://github.com/aragon/aragon" target="_blank">
              Aragon client
            </a>
            .
          </li>
          <li>
            Develop, ship, and maintain the frontend for the first version of the{' '}
            <a
              href="https://github.com/aragon/aragon-court"
              target="_blank">
              Aragon Court
            </a>
            .
          </li>
          <li>
            Work with our Design team to transform ideas and designs into
            modern, clean, and readable code.
          </li>
          <li>
            Research, develop, test and implement features on web applications
            built with modern technologies.
          </li>
          <li>
            Collaborate with the product team to define new product features.
          </li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>
            Experience working with Modern JavaScript (ES6+) and Web APIs, CSS,
            React (Web and Native), resource optimization, development tools.
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
          <li>Experience working with Web3 technologies.</li>
          <li>
            Previous experience contributing or managing open source projects.
          </li>
          <li>Previous experience working remotely.</li>
          <li>Very good written communication skills.</li>
          <li>Attention to UX/UI design.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with your LinkedIn and/or CV, your Github profile, and any information you
            consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">UI engineer application</span>.
          </li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Solidity Engineer"
        category="ENGINEERING"
        title="Solidity Engineer"
        open="solidity-engineer"
        description="We're looking for a Solidity Engineer to help us build the smart contract framework for decentralized organizations and court systems. You'll work with our product and research teams to architect and implement the Aragon client, Aragon Court, and aragonOS. ">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Develop, ship, and maintain quality smart contracts for the Aragon
            client, the Aragon Network, and aragonOS.
          </li>
          <li>
            Develop high-quality code that is maintainable, performant,
            accessible, precise and compatible with modern platforms.
          </li>
          <li>
            Perform internal code audits and code reviews, and produce product
            and best practices documentation.
          </li>
          <li>
            Collaborate with other product contributors to define new product
            features, roadmap, and workflow.
          </li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>
            Expert understanding of Ethereum and the inner workings of the EVM.
          </li>
          <li>
            Provable ability to ship high quality, well crafted code running on
            Ethereum.
          </li>
          <li>Strong unit testing culture.</li>
          <li>Being passionate about decentralization and open source.</li>
          <li>
            Being an autonomous individual with a proactive attitude and a love
            for time self-management.
          </li>
        </ul>
        <h5>Nice to have</h5>
        <ul>
          <li>Experience contributing or managing open source projects.</li>
          <li>Very good written communication skills. </li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with your GitHub, LinkedIn/CV, Twitter/Reddit profiles, plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Solidity Engineer opening application</span>
            .
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
