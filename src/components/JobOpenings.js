import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection id="jobs">
    <h6>
      <span className="grey">—</span> OPEN JOBS POSITIONS
    </h6>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Operations"
        category="OPERATIONS"
        title="Operations"
        description="We’re looking for an Operations person who loves to wear many hats, ready to hustle, and able to turn chaos into efficient processes. You will help us bridge Aragon One with the world by optimizing traditional operations, supporting the team and the community, and defining the development of apps to automate operations in DAOs. ">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Collaborate with financial and accounting partners to manage
            financial models and reports, accounting payable and receivable and
            bookkeeping.
          </li>
          <li>
            Define, track and report operations metrics, forecasts and budgets.
          </li>
          <li>
            Collaborate with legal partners and HR to process visas, work
            permits, policies, insurance, contracts, and other legal
            responsibilities.
          </li>
          <li>
            Work with the CEO to develop strategic partnerships with banks,
            governments, and other external stakeholders.
          </li>
          <li>
            Work with the Communications team to manage sponsorships, providers
            and team logistics for events, meetups, and conferences.
          </li>
          <li>
            Work with the Communications team to build and develop an
            Ambassadors program.
          </li>
          <li>
            Work with the Product team to research features and apps to automate
            operations in DAOs (such as the{' '}
            <a
              target="_blank"
              href="https://github.com/aragon/aragon-apps/tree/master/future-apps/payroll">
              Aragon Payroll
            </a>{' '}
            and the{' '}
            <a
              target="_blank"
              href="https://github.com/aragon/aragon-apps/tree/master/apps/finance">
              Aragon Finance
            </a>{' '}
            apps).
          </li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>
            Experience working in an operations, admin, accounting, legal or
            similar roles.
          </li>
          <li>
            Experience working with spreadsheets, management reports and
            delivering financial statements.
          </li>
          <li>
            Very good written and spoken communication skills in English. German
            is a plus.
          </li>
          <li>Willingness to be involved in community and product projects.</li>
          <li>Being organized and very detail oriented.</li>
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
          <li>
            European/Swiss resident with experience working with Swiss
            institutions.
          </li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with the following attachments plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Operations opening application</span>.
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
        description="We're looking for a Frontend Engineer with a love for beautiful, well-crafted interfaces. You'll work with our rockstar frontend team building Aragon Labs, Aragon client, and aragonOS.">
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
            Write an email with the following attachments plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">Frontend Dev opening application</span>.
          </li>
          <li>
            Please send along your GitHub profile. Since we are open source
            only, we require applicants for developer positions to have a very
            active and healthy GitHub profile.
          </li>
          <li>
            Please send the following challenge completed:
            <div className="highlight">
              <h5>Description</h5>
              <p>
                Build a small app to explore the latest blocks on Ethereum. The
                goal of the app is to provide a way to glance at the recent
                Ether transfers happening on the blockchain.
              </p>
              <h5>Requirements</h5>
              <ol>
                <li>Display the ten latest blocks.</li>
                <li>
                  Allow the user to see the transactions from a block. Only the
                  transactions sending Ether should be displayed.
                </li>
                <li>Allow the user to see some details about a transaction.</li>
              </ol>
              <h5>Notes</h5>
              <ul>
                <li>You can use any library you feel comfortable with.</li>
                <li>The app will be loaded into a browser with MetaMask.</li>
                <li>
                  Feel free to interpret the requirements in any way that you
                  think could be interesting.
                </li>
                <li>
                  The app doesn’t need to follow the Aragon visual identity.
                </li>
                <li>Don’t hesitate to ask any question to the team</li>
              </ul>
              <h5>The submission will be evaluated on the following points:</h5>
              <ul>
                <li>Code quality / readability / testability.</li>
                <li>UX / visual solutions.</li>
                <li>Perceived performance.</li>
                <li>Accessibility.</li>
              </ul>
            </div>
          </li>
        </ul>
      </JobOpening>
    </Slide>
    <Slide bottom duration={1200}>
      <JobOpening
        role="Systems Engineer"
        category="ENGINEERING"
        title="Systems Engineer"
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
        role="Developer Relations"
        category="COMMUNITY"
        title="Developer Relations"
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
    <Slide bottom duration={1200}>
      <JobOpening
        role="Documentation writer"
        category="ENGINEERING"
        title="Documentation Technical Writer"
        description="We’re looking for a Technical Writer to help us communicate the different moving parts of Aragon client and Dev Tools to facilitate the development of the Ethereum community. Our Technical Writer will be the bridge between Aragon engineers and external developers, as well as the reference to support the growth of the Ethereum community through better documentation.">
        <h5>Responsibilities</h5>
        <ul>
          <li>
            Write, publish and maintain clear, concise, accurate and easy to
            understand developer documentation in the Aragon Developer Portal.
          </li>
          <li>
            Write, edit and publish technical articles and announcements to the
            Aragon Project blog and the Aragon One blog.
          </li>
          <li>
            Work with the Product and Engineering teams to research, identify
            and create use cases and example code.
          </li>
          <li>Facilitate technical community support.</li>
        </ul>
        <h5>Requirements</h5>
        <ul>
          <li>Excellent written communication skills in English.</li>
          <li>
            Previous experience writing and editing technical documentation and
            defining the structure of a documentation set.
          </li>
          <li>
            Previous experience contributing to or managing open source
            projects.
          </li>
        </ul>
        <h5>Nice to have</h5>
        <ul>
          <li>Previous experience working remotely.</li>
          <li>Previous experience working on software development.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Write an email with the following attachments plus any information
            you consider important to{' '}
            <a href="mailto:hiring@aragon.one">hiring@aragon.one</a>, with the
            subject
            <span className="label">
              Documentation Technical Writer opening application
            </span>
            .
          </li>
          <li>
            Please send along your Linkedin, Github, or Twitter profiles, or any
            other relevant links. Since we are open source only, we require
            applicants for developer positions to have a very active and healthy
            GitHub profile.
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
    padding: 45px;
    margin-top: 10px;
  }
`;

export default JobOpenings;
