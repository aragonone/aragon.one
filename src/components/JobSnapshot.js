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
    </Description>
  </SnapshotCardContainer>
);

const SnapshotCardContainer = styled.div`
  border: solid 1px #3a3a3a;
  max-width: 50%;
  margin: 0 15px;
  width: 450px;
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
    font-size: 22px;
  }
`;

const Description = styled.div`
  padding: 30px;
  p {
    font-family: 'FontRegular';
    line-height: 37px;
    font-size: 22px;
    margin-bottom: 30px;
  }
  h4 {
    font-family: 'FontRegular';
    line-height: 1;
    font-size: 14px;
    letter-spacing: 2.6px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    text-transform: uppercase
  }
`;
export default SnapshotCard;
