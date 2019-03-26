import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-bootstrap/Collapse';
import JobSnapshot from './JobSnapshot';
import plus from './assets/plus.svg'

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

class JobOpening extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const {open} = this.state;
    return (
      <JobOpeningSection>
        <JobTitle
          onClick={() => this.setState({open: !open})}
          aria-controls="collapse-text"
          aria-expanded={open}>
          <div className="info-title">
            <h4>WRITER</h4>
            <h2>Documentation Technical Writer</h2>
          </div>
          <div className="icon-title">
            <img src={plus} />
          </div>
        </JobTitle>
        <Collapse in={this.state.open}>
          <JobInformation id="collapse-text">
            <div className="job-container">
              <Description>
                We're looking for a Frontend Developer to work with us on the
                Aragon Labs, Aragon client, and aragonOS. Our Frontend Developer
                must not only be a frontend and web3 expert but also a
                nonconformist. That means that our ideal candidate is not only a
                respected engineer but also a decentralization advocate.
              </Description>
              <JobBody>
                <BreakPoint to="medium">
                  <JobSnapshot />
                </BreakPoint>
                <h5>Responsibilities</h5>
                <ul>
                  <li>
                    Develop, ship, and maintain quality frontends for the Aragon
                    Labs and Aragon client app projects, working closely with
                    our <a href="">UI toolkit</a>.
                  </li>
                  <li>
                    Work with our Design Lead to transform ideas and designs
                    into modern, clean, and readable code.
                  </li>
                  <li>
                    Research, develop, test and implement features on web
                    applications built with modern technologies.
                  </li>
                  <li>
                    Collaborate with the product team to define new product
                    features.
                  </li>
                </ul>
                <h5>Responsibilities</h5>
                <ul>
                  <li>
                    Develop, ship, and maintain quality frontends for the Aragon
                    Labs and Aragon client app projects, working closely with
                    our UI toolkit.
                  </li>
                  <li>
                    Work with our Design Lead to transform ideas and designs
                    into modern, clean, and readable code.
                  </li>
                  <li>
                    Research, develop, test and implement features on web
                    applications built with modern technologies.
                  </li>
                  <li>
                    Collaborate with the product team to define new product
                    features.
                  </li>
                </ul>
                <h5>Responsibilities</h5>
                <ul>
                  <li>
                    Develop, ship, and maintain quality frontends for the Aragon
                    Labs and Aragon client app projects, working closely with
                    our UI toolkit.
                  </li>
                  <li>
                    Work with our Design Lead to transform ideas and designs
                    into modern, clean, and readable code.
                  </li>
                  <li>
                    Research, develop, test and implement features on web
                    applications built with modern technologies.
                  </li>
                  <li>
                    Collaborate with the product team to define new product
                    features.
                  </li>
                </ul>
                <h5>Responsibilities</h5>
                <ul>
                  <li>
                    Develop, ship, and maintain quality frontends for the Aragon
                    Labs and Aragon client app projects, working closely with
                    our UI toolkit.
                  </li>
                  <li>
                    Work with our Design Lead to transform ideas and designs
                    into modern, clean, and readable code.
                  </li>
                  <li>
                    Research, develop, test and implement features on web
                    applications built with modern technologies.
                  </li>
                  <li>
                    Collaborate with the product team to define new product
                    features.
                  </li>
                </ul>
              </JobBody>
            </div>
            <BreakPoint from="medium">
              <JobSnapshot />
            </BreakPoint>
          </JobInformation>
        </Collapse>
      </JobOpeningSection>
    );
  }
}

export default JobOpening;

const JobOpeningSection = styled.div`
  height: auto;
  background: #191919;
  mix-blend-mode: normal;
  opacity: 0.71;
  border-bottom: solid 1px black;
  margin-bottom: 20px;
  ${medium('margin-bottom: 0;')};
`;
const JobInformation = styled.div`
  height: auto;
  background: #0f0f0f;
  padding: 30px 15px;
  ${medium('padding: 40px 30px 40px 40px;')};
  display: flex;
  align-items: flex-start;
  .job-container {
    ${medium('margin-right: 25px;')};
    max-width: 100%;
  }
`;

const JobTitle = styled.div`
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${medium('flex-direction: row; padding: 45px 40px 40px 40px;')};
  .info-title {
    padding: 45px 40px 20px 40px;
    ${medium('padding 0;')};
  }
  .icon-title {
    width: 100%;
    text-align: center;
    padding: 10px;
    background: #2D2D2D;
    ${medium('padding 0; width: auto; background: transparent;')};
    img {
      width: 25px;
      ${medium('width: auto;')};
    }
  }

  h2 {
    font-family: 'FontRegular';
    line-height: 48px;
    font-size: 32px;
    margin: 0;
  }
  h4 {
    font-family: 'FontRegular';
    margin: 0;
    font-size: 14px;
    letter-spacing: 2.6px;
    color: #ff7671;
  }
`
const JobBody = styled.div`
  font-family: 'FontRegular';
  h5 {
    line-height: 48px;
    font-size: 24px;
    letter-spacing: 0.275px;
  }
  li {
    line-height: 27px;
    font-size: 18px;
    letter-spacing: 0.275px;
    margin-bottom: 10px;
  }
  a {
    color: #FF7671;
  }
  ul {
    list-style: none;
    margin-bottom: 40px;
  }

  ul li::before {
    content: "•";
    color: #FF7671;
    font-weight: bold;
    font-size: 30px;
    display: inline-block;
    width: 30px;
    margin-left: -30px;
    position: relative;
    top: 1px;
  }
`;

const Description = styled.h3`
  font-family: 'FontRegular';
  line-height: 35px;
  font-size: 20px;
  border-bottom: solid 1px #3a3a3a;
  padding-bottom: 30px;
  margin-bottom: 30px;
  ${medium('line-height: 48px; font-size: 28px;')};
`;
