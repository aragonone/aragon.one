import React from 'react';
import styled from 'styled-components';
import A1 from './assets/job-logo.svg';

const SnapshotCard = ({...props}) => (
  <SnapshotCardContainer>
    <Title>
      <div>
        <p>Job Snapshot</p>
      </div>
      <div>
        <img src={A1} />
      </div>
    </Title>
    <Description>
      <h4>Type</h4>
      <p>Full-time</p>
      <h4>Location</h4>
      <p>Descentralized</p>
      <h4>Job Type</h4>
      <p>Designer</p>
      <a>Apply now</a>
    </Description>
  </SnapshotCardContainer>
);

const SnapshotCardContainer = styled.div`
  border: solid 1px #3a3a3a;
  max-width: 50%;
  margin: 0 15px;
  width: 450px;
  min-width: 315px;
`;

const Title = styled.div`
  border-bottom: solid 1px #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  div {
    padding: 0 15px;
  }
  p {
    margin: 0;
    font-family: 'FontRegular';
    line-height: 48px;
    font-size: 24px;
  }
`;

const Description = styled.div`
  padding: 30px;
  font-family: 'FontRegular';
  p {
    line-height: 37px;
    font-size: 22px;
    margin-bottom: 30px;
  }
  h4 {
    line-height: 1;
    font-size: 14px;
    letter-spacing: 2.6px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    text-transform: uppercase
  }
  a {
    border: solid 1px #FF7671;
    font-size: 14px;
    text-align: center;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    width: 100%;
    display: inherit;
    padding: 15px;
    cursor: pointer;
  }
  a:hover {
    background: #FF7671;
  }
`;
export default SnapshotCard;
