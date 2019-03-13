import React from 'react';
import styled from 'styled-components';
import Collapse from 'react-bootstrap/Collapse';
import JobSnapshot from './JobSnapshot';

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
            <h4>WRITER</h4>
            <h2>Documentation Technical Writer</h2>
        </JobTitle>
        <Collapse in={this.state.open}>
          <JobInformation id="collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
            <JobSnapshot/>
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
`;
const JobInformation = styled.div`
  height: auto;
  background: #0F0F0F;
  padding: 30px;
  display: flex;
`;


const JobTitle = styled.div`
  cursor: pointer;
  padding: 30px;
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
    color: #FF7671;
  }
`;
