import React from 'react';
import styled from 'styled-components';
import JobOpening from './JobOpening';
import Slide from 'react-reveal/Slide';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const JobOpenings = () => (
  <JobOpeningsSection id="jobs">
    <h6 id="protocol-engineer">
      <span className="grey">—</span> OPEN JOB POSITIONS
    </h6>
  <Slide bottom duration={1200}>
      <JobOpening
        role="Protocol Engineer"
        category="ENGINEERING"
        title="Protocol Engineer"
        open="protocol-engineer"
        link="https://jobs.lever.co/aragonone/689be195-ad79-4ffd-a342-76e8ded91ebb/"
        description={
          <span>
            Our protocols secure more than $300M on Ethereum’s blockchain and power more than 
            1500 on-chain organizations — and this number increases every day. Collectively, 
            thousands of users trust us to deliver secure and reliable tools to govern their 
            communities and protocols, and we value this more than anything.
            <br /> <br />
            We’re looking to hire a Protocol Engineer to join our team to continue delivering on 
            the frontiers of protocol design on and off of Ethereum. We highly value individuals 
            with intellectual curiosity who maintain a strong attention to detail and quality. 
            You’re someone with work experience across a variety of technical disciplines that 
            enjoys independence amongst a strong surrounding team.
            <br /> <br />
            Your first month will be focused on absorbing as much information as possible and then 
            progressively contributing to larger and larger efforts with more autonomy. You will have 
            the potential to create incredible value within and outside of the Aragon, DAO, and Ethereum 
            communities by contributing to existing projects such as the Aragon Network and Aragon Court, 
            as well as exploring the frontiers with new governance products.
          </span>
        }>
        <h5>What You’ll Do</h5>
        <ul>
          <li>
            Architect, develop, and maintain smart contracts for DAOs, the Aragon Network, Aragon Court, 
            and projects in the broader Aragon ecosystem.
          </li>
          <li>
            Perform internal code audits and code reviews, and produce product 
            and best practices documentation.
          </li>
          <li>
            Research and experiment with new Web3 technologies to explore new governance mechanisms.
          </li>
          <li>
            Understand incentives and thinking out of the box to design robust behavioural mechanisms.
          </li>
        </ul>
        <h5>What We’re Looking For</h5>
        <ul>
          <li>Experience working as a full-stack engineer, with strong backend development skills.</li>
          <li>Proven ability to ship high quality, well crafted code, and architecting complex systems.</li>
          <li>Strong testing culture.</li>
          <li>Being passionate about open source and distributed systems.</li>
          <li>Being a detail oriented, autonomous individual with a proactive attitude and a love for time self-management.</li>
        </ul>
        <h5>Bonus Points</h5>
        <ul>
          <li>Experience contributing to or managing open source projects.</li>
          <li>Understanding of Ethereum, Ethereum security risks and incentives, and the inner workings of the EVM.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Fill this{' '}
            <a
              href="https://jobs.lever.co/aragonone/689be195-ad79-4ffd-a342-76e8ded91ebb/"
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
        role="Marketing Communications Manager"
        category="COMMUNICATIONS"
        title="Marketing Communications Manager"
        open="marketing-communications-manager"
        idprop="protocol-engineer"
        link="https://jobs.lever.co/aragonone/6fac9534-deec-4716-b307-e1e8af7b60d2/"
        description={
          <span>
            Our communications have shifted from inspirational to product-focused, 
            from what we wanted to build to the core value of what we’ve built. 
            Our protocols secure more than $300M on Ethereum’s blockchain and power 
            more than 1500 on-chain organizations. Aragon is more than what we’ve built: 
            Decentraland, Curve, and all the other projects powered by Aragon and 
            thousands of community members shilling, hacking, and building in the ecosystem.
            <br /> <br />
            Our mission now is empowering our community stakeholders and the narratives 
            created by ANT holders, DAO and Aragon Court users, creators, and developers. 
            It’s not only about infrastructure to build decentralized technology but building a{' '}
            <a
              href="https://otherinter.net/web3/headless-brands/"
              target="_blank">
              headless brand
            </a>.
            <br /> <br />
            We’re looking to hire a Marketing Communications Manager to work cross-functionally with
            the team and community stakeholders. You’ll report to Luis, and work alongside with Jack —marketing, 
            Adri —design, Burrrata —community, John —governance, and the rest of the team. We value generalists 
            who are deep in a particular area. We highly value strategic thinkers that are execution-focused. 
            We’re looking for someone who speaks the language of the community (memes and good vibes) and 
            able to turn complex technical ideas simple.
          </span>
        }>
        <h5>What You’ll Do</h5>
        <ul>
          <li>
            Lots of writing. Understand the business and product strategies to develop 
            a content strategy from narrative to the content calendar, from social media 
            and website copies to blog posts and case studies. Work with the team and the community 
            to generate, edit, publish and share engaging content continuously.
          </li>
          <li>
            Cross-channel marketing strategy. Deeply understand how to scope and execute 
            communication strategies needed to reach different customer segments: talk regularly to users 
            and prospects and work with our engineering, design, and product teams for insights 
            that inform your work (content, messaging, positioning, etc.).
          </li>
          <li>
            Run data-driven testing to determine the potential success of new channels. 
            You will provide insights and optimizations for existing and new channels - 
            always linking initiatives back to growth.
          </li>
          <li>
            Work with the design team to always be looking out for ways to improve user experience from end to end.
          </li>
          <li>
            Projects where you’ll do this: Aragon Network, Aragon Court, DAOs powered by Aragon, and product research experiments.
          </li>
          <li>
            Existing channels and platforms:{' '}
            <a
              href="https://aragon.org"
              target="_blank">
              Aragon Project
            </a>
            and{' '}
            <a
              href="https://aragon.one"
              target="_blank">
              Aragon One
            </a>
            websites inclusing the wiki,{' '}
            <a
              href="https://twitter.com/aragonproject"
              target="_blank">
              Aragon Project
            </a>
            and{' '}
            <a
              href="https://twitter.com/aragononeteam"
              target="_blank">
              Aragon One Team
            </a>
            Twitter and Youtube accounts, and blogs; our community{' '}
            <a
              href="https://discord.gg/aragon"
              target="_blank">
              Discord server
            </a>
            , the{' '}
            <a
              href="https://forum.aragon.org"
              target="_blank">
              Aragon Forum
            </a>
            , and the{' '}
            <a
              href="https://reddit.com/r/aragonproject"
              target="_blank">
              Aragon subreddit
            </a>.
          </li>
        </ul>
        <h5>What We’re Looking For</h5>
        <ul>
          <li>
            You’ve lead marketing and communications strategies with a heavy focus on narratives, community and content in a growth stage project.
          </li>
          <li>
            A storyteller and an excellent writer. From announcement tweets and 
            inspirational content to reviewing blog posts written by the engineering team. 
            You have deep empathy for users and are able to adapt to how you communicate 
            to best reach and engage DAO creators, developers, and users. You hate typos, 
            double spaces, and inconsistencies. You have excellent verbal and 
            written communication skills.
          </li>
          <li>
            Data-oriented. You optimize for performance. You can set up the infrastructure to 
            collect data and insights and generate balanced and thoughtful strategies for how 
            to take our products to market.
          </li>
          <li>
            A strategic doer. You are comfortable designing and leading 360° campaigns yet 
            you are hands-on and low enough to the ground to have an immediate impact. 
            You can adapt quickly and execute fast.
          </li>
          <li>
            Passionate about blockchain technology. You understand and can explain technical concepts in ways that everyday people can understand.
          </li>
          <li>
            Self-manager. You are detail-oriented, an autonomous individual with a proactive attitude, and a love for time self-management.
          </li>
        </ul>
        <h5>Bonus Points</h5>
        <ul>
          <li>Design skills and basic knowledge of design concepts, image formats, Figma, and Webflow.</li>
          <li>Experience contributing to or managing open source projects.</li>
          <li>Understanding of Ethereum, and the blockchain space.</li>
        </ul>
        <h5>How to apply</h5>
        <ul>
          <li>
            Fill this{' '}
            <a
              href="https://jobs.lever.co/aragonone/6fac9534-deec-4716-b307-e1e8af7b60d2"
              target="_blank">
              form
            </a>{' '}
            with your Linkedin and/or CV, links to relevant content, and any information you
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
        idprop="growth-hacker"
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
