import React from 'react';
import styled from 'styled-components';
import background from './assets/map.gif';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Remote = () => (
  <RemoteSection>
    <Container>
      <Fade bottom duration={1200} delay={200}>
        <h6>
          <span className="grey">—</span> A COMPLETELY REMOTE TEAM
        </h6>
      </Fade>
      <Fade bottom duration={1200} delay={400}>
        <p>
          Talent shouldn't be constrained by geography. We work remote.
          Distance feels shorter when the vision of a fair world unites us all.
        </p>
        <BreakPoint to="medium">
          <MobileImg src={background} />
        </BreakPoint>
      </Fade>
    </Container>
  </RemoteSection>
);

const MobileImg = styled.img`
  width: 100%;
  height: 300px;
  overflow: hidden;
  object-fit: cover;
  object-position: -54px 100%;
`;
const RemoteSection = styled.section`
  min-height: 600px;
  height: auto;
  background: none;
  ${breakpoint(
    'medium',
    `
      background: url(${background}) no-repeat;
      background-size: 68%;
      background-position: 135% 50%;
    `
  )}
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  h6 {
    margin: 0 0 30px 0 !important;
  }
  p {
    font-family: 'FontRegular';
    line-height: 1.5;
    font-size: 1.78rem;
    max-width: 100%;
    ${medium('font-size: 2.28rem; max-width: 40%;')};
  }
`;
export default Remote;
