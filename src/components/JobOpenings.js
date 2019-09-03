import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection id="jobs">
    <h6 id="head-of-support">
      <span className="grey">—</span> OPEN JOBS POSITIONS
    </h6>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Head of Support"
        category="COMMS"
        title="Head of Support"
        open="head-of-support"
        idprop="frontend-engineer"
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
            Write an email with the following attachments plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Head of Support opening application</span>.
          </li>
          <li>Send along your LinkedIn, CV, Twitter and/or Medium profiles.</li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Frontend Engineer"
        category="ENGINEERING"
        title="Frontend Engineer"
        open="frontend-engineer"
        idprop="systems-engineer"
        description="We're looking for a Frontend Engineer with a love for beautiful, well-crafted interfaces. You'll work with our frontend team building Aragon Labs, Aragon client, and aragonUI.">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Develop, ship, and maintain quality interfaces for{' '}
            <a
              href="https://blog.aragon.org/announcing-aragon-labs-a679693429ae/"
              target="_blank">
              Aragon Labs
            </a>{' '}
            and{' '}
            <a href="https://github.com/aragon/aragon" target="_blank">
              Aragon client
            </a>
            , working closely with our{' '}
            <a
              href="https://hack.aragon.org/docs/aragonui-intro.html"
              target="_blank">
              UI toolkit
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
            Expert understanding of: Modern JavaScript (ES6+) and Web APIs, CSS,
            React (Web and Native), resource optimization, development tools.
          </li>
          <li>Experience working with Web3 technologies.</li>
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
            Previous experience contributing or managing open source projects.
          </li>
          <li>Previous experience working remotely.</li>
          <li>Very good written communication skills.</li>
          <li>Attention to UX/UI design.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with your LinkedIn and/or CV plus any information you
            consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Frontend Dev opening application</span>.
          </li>
          <li>
            Please send along your GitHub profile. Since we are open source
            only, we require applicants for developer positions to have a very
            active and healthy GitHub profile.
          </li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Systems Engineer"
        category="ENGINEERING"
        title="Systems Engineer"
        open="systems-engineer"
        idprop="developer-relations"
        description={
          <span>
            We’re looking for a Systems Engineer to help us architect and
            maintain our server infrastructure and automate internal processes.
            Our ideal Systems Engineer is someone who wants to create tools that
            will ultimately automate DAOs, and loves to build tools to benefit
            the open source community.
            <br />
            We try to keep our centralized infrastructure at a minimum,
            balancing usability and decentralization (censorship-resistance). We
            strive to make as much as the infrastructure that supports using
            <a
              target="_blank"
              href="https://blog.aragon.one/deploying-and-distributing-aragon-core-11e70cbc9b50">
              {' '}
              Aragon client reproducible by users
            </a>{' '}
            so they don’t have to rely on our servers.
          </span>
        }>
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Take ownership of Aragon's hosted services, including (but not
            limited to) Ethereum nodes, IPFS nodes, Rocket Chat, and NextCloud.
          </li>
          <li>Architect, build, and maintain rock solid infrastructure.</li>
          <li>
            Create open source tools to automate internal workflows and systems
            engineering needs, with the goal of enhancing the entire open source
            community's toolset and knowledge.
          </li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>
            Proven ability to launch, secure, monitor, and maintain automated
            cloud services.
          </li>
          <li>Experience working with Kubernetes and setting up nodes.</li>
          <li>
            Pragmatic approach to infrastructure; never fail the same way twice.
          </li>
          <li>
            Experience building, securing, maintaining, and open sourcing
            infrastructure tooling.
          </li>
          <li>
            Experience working with Docker and containerizing applications.
          </li>
          <li>
            You’re comfortable working autonomously and experienced enough to
            figure out what you need to do, given a broad set of end goals.
          </li>
        </ul>
        <h5>Nice to have</h5>
        <ul>
          <li>
            Experience building deterministic environments and continuous
            delivery pipelines.
          </li>
          <li>
            Previous experience contributing or managing open source projects.
          </li>
          <li>Previous experience working remotely.</li>
          <li>Very good written communication skills.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with the following attachments plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Systems Engineer opening application</span>.
          </li>
          <li>Please send along your LinkedIn, CV, Twitter, and/or Medium.</li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Developer Relations"
        category="COMMUNITY"
        title="Developer Relations"
        idprop="solidity-engineer"
        open="developer-relations"
        description="We're looking for a Developer Relations to help third party developers create apps on top of the Aragon client and aragonOS. Our Dev Rels must be someone passionate in helping others understand technical subjects through technical writing, networking and educating people. That means that our ideal Dev Rels is not only a legit developer but also an Aragon Technical Evangelist.">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Write technical documentation and tutorials for developers, help
            Tatu create developer focused content.
          </li>
          <li>Nurture and support the Aragon dev ecosystem.</li>
          <li>
            Attend and organize hackathons, helping devs get excited and started
            developing on Aragon.
          </li>
          <li>Support external contributors.</li>
          <li>
            Source, screen and select interesting projects that might be
            eligible for{' '}
            <a
              target="_blank"
              href="https://blog.aragon.org/introducing-aragon-nest-1aa8c91c0566/">
              Nest grants
            </a>
            .
          </li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>
            Deep understanding of the crypto ecosystem and what's going on under
            the hood.
          </li>
          <li>
            Technical expertise and experience working professionally as a
            developer.
          </li>
          <li>Good social skills.</li>
          <li>Very good written communication skills.</li>
          <li>Experience writing technical documentation for developers.</li>
          <li>
            Interest in working with developers to help them use and build on
            top of Aragon.
          </li>
          <li>Being passionate about decentralization.</li>
          <li>
            Being an autonomous individual with a proactive attitude and a love
            for time self-management.
          </li>
        </ul>
        <h5>Nice to have</h5>
        <ul>
          <li>Experience contributing or managing open source projects.</li>
          <li>
            Experience creating documentation for developers, or documentation
            in general.
          </li>
          <li>Experience networking in blockchain events.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with the following attachments plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">
              Developer Relations opening application.
            </span>
            .
          </li>
          <li>
            Please send along your GitHub, LinkedIn/CV, Twitter/Reddit profiles,
            and references we can get in touch with.
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
        description="We're looking for a Solidity Engineer to help us build the smart contract framework for decentralized organizations and court systems. You'll work with our product and research teams to architect and implement the Aragon client, Aragon Labs, and aragonOS. ">
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
            Write an email with the following attachments plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Solidity Engineer opening application</span>
            .
          </li>
          <li>
            Please send along your GitHub, LinkedIn/CV, Twitter/Reddit profiles.
            Since we are open source only, we require applicants for developer
            positions to have a very active and healthy GitHub profile.
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
