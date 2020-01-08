import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection id="jobs">
    <h6 id="executive-assistant">
      <span className="grey">—</span> OPEN JOB POSITIONS
    </h6>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Executive Assistant"
        category="OPERATIONS"
        title="Executive Assistant"
        open="executive-assistant"
        idprop="javascript-engineer"
        description={
          <span>
            We’re looking for an Executive Assistant to work in tandem with our{' '}
            <a href="https://twitter.com/izqui9" target="_blank">
              CEO
            </a>
            . Here’s what to expect:
            <br /> <br />
            Our CEO is highly energetic, creative, and motivated and transmits
            that to others around him. His day to day consists of balancing the
            urgent with the important, mixing trips, calls, and focus work. As
            the CEO of a fast-growing company in an emerging ecosystem, his
            agenda is very dynamic, involving different stakeholders. Learn more
            about him through this{' '}
            <a
              href="https://blog.aragon.one/team-interviews-jorge-aragons-tech-lead-dae54d7eacac/"
              target="_blank">
              Team Interview
            </a>
            .
            <br /> <br />
            You’re someone energetic who thrives in dynamic environments, and
            you’re not put off by uncertainty. You can efficiently research and
            compare options to facilitate decision-making, you can take unclear
            tasks, figure out boundaries, and get them done, and you work well
            time and resource-constrained.
            <br /> <br />
            Given our sector, it’s important to be open-minded, a fast learner,
            and being comfortable with technology and tech-related concepts.
            This is a remote position but you must be willing to travel if
            necessary.
          </span>
        }>
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Managing his agenda, prioritizing, scheduling, and rescheduling
            business and personal appointment across timezones.
          </li>
          <li>
            Managing business and personal travel logistics, from the
            accommodation, flights, transfers, and rental-car bookings to
            itinerary definition.
          </li>
          <li>
            Handle personal admin tasks: insurance, managing household
            maintenance, making appointments, reviewing correspondence, and
            other related tasks.
          </li>
          <h5>Nice to have</h5>
          <ul>
            <li>Being fluent in Spanish.</li>
            <li>Being an European resident.</li>
          </ul>
          <h5>How to apply</h5>
          <ul>
            <li>
              Fill this{' '}
              <a
                href="https://jobs.lever.co/aragonone/043b5d02-f58c-4e1d-9dae-ccd39fcaa7f7/apply"
                target="_blank">
                form
              </a>{' '}
              with your Linkedin and/or CV, and any information you consider
              important.
            </li>
          </ul>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Javascript Engineer"
        category="ENGINEERING"
        title="Javascript Engineer"
        open="javascript-engineer"
        idprop="ui-engineer"
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
          <li>Track record working with Javascript environments.</li>
          <li>
            Experience working with modern JavaScript tools like ES6+, React,
            Node, resource optimization, development tools, and service APIs.
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
        role="UI Engineer"
        category="ENGINEERING"
        title="UI Engineer"
        open="ui-engineer"
        idprop="solidity-engineer"
        description={
          <span>
            UI engineering connects the people with the product. As Aragon One
            looks beyond developer tools, we're looking for UI Engineers with a
            love for beautiful, well-crafted, pixel-perfect interfaces that
            enable users to easily build their organizations on top of Aragon.
            <br /> <br />
            We&apos;re building a native toolkit of React UI components for
            decentralized apps, based on the Aragon Design System. We care about
            our product&apos;s quality standards and consistency, shipping
            faster and more efficiently, making the toolkit accessible to other
            app developers and scalable to the entire ecosystem.
          </span>
        }>
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Develop, ship, and maintain the{' '}
            <a href="https://github.com/aragon/aragon-ui" target="_blank">
              Aragon UI
            </a>
            , an Aragon-native toolkit of React UI components for decentralized
            apps, based on the{' '}
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
            Experience working with modern JavaScript tools like ES6+, Web APIs,
            CSS, React, Styled Components, and resource optimization tools.
          </li>
          <li>
            Proven ability to ship quality, well-crafted code within tight
            deadlines.
          </li>
          <li>Being detail-oriented with attention to UX/UI design.</li>
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
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Fill this{' '}
            <a
              href="https://jobs.lever.co/aragonone/3c6727bf-ed55-4ca2-8985-0b007508bb35/apply"
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
            Fill this{' '}
            <a
              href="https://jobs.lever.co/aragonone/9a82ba9c-0f04-4479-a76e-c11d9f415d89/apply"
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
