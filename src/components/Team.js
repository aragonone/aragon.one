import React from 'react';
import styled from 'styled-components';
// import team1 from './assets/team/1.svg';
import Carousel from 'react-bootstrap/Carousel';
import TeamCard from './TeamCard';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Team = () => (
  <TeamSection>
    <Container>
      <div>
      <h6>
        <span className="grey">—</span> MEET THE TEAM
      </h6>
      </div>
      <Carousel>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard />
            <TeamCard />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard />
            <TeamCard />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard />
            <TeamCard />
          </TeamContainer>
        </Carousel.Item>
      </Carousel>
    </Container>
  </TeamSection>
);

const TeamSection = styled.section`
  min-height: 600px;
  height: 100vh;
  padding: 100px 0 200px 0;
  margin-bottom: 100px;
`;

const TeamContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -15px;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
`;
export default Team;
