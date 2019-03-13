import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import TeamCard from './TeamCard';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Team = () => (
  <TeamSection>
    <Container>
      <h6>
        <span className="grey">—</span> MEET THE TEAM
      </h6>
      <Carousel>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Luis Ivan Cuende"
              position="Founder"
              imageUrl="Luis"
            />
            <TeamCard
              name="Jorge Izquierdo"
              position="Founder"
              imageUrl="Jorge"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Monica Zeng"
              position="HR"
              imageUrl="Monica"
            />
            <TeamCard
              name="Maria Gomez"
              position="Ecosystem"
              imageUrl="Maria"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Luke"
              position="Reaserch"
              imageUrl="Luke"
            />
            <TeamCard
              name="Brett"
              position="Dev lead"
              imageUrl="Brett"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Bingen"
              position="Solidity dev"
              imageUrl="Bingen"
            />
            <TeamCard
              name="Facundo Spagnuolo"
              position="Solidity dev"
              imageUrl="Facu"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Pierre"
              position="Frontend dev"
              imageUrl="Pierre"
            />
            <TeamCard
              name="Gorka"
              position="Frontend dev"
              imageUrl="Gorka"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Delfina Polito"
              position="Frontend dev"
              imageUrl="Delfi"
            />
            <TeamCard
              name="Daniel"
              position="Web3 dev"
              imageUrl="Daniel"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Jouni"
              position="Product design"
              imageUrl="Jouni"
            />
            <TeamCard
              name="Paty"
              position="UX design"
              imageUrl="Paty"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Adri"
              position="Brand design"
              imageUrl="Adri"
            />
            <TeamCard
              name="John"
              position="Communications lead"
              imageUrl="John"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Tatu"
              position="Communication"
              imageUrl="Tatu"
            />
            <TeamCard
              name="Lorena"
              position="Opetations"
              imageUrl="Lorena"
            />
          </TeamContainer>
        </Carousel.Item>
      </Carousel>
    </Container>
  </TeamSection>
);

const TeamSection = styled.section`
  min-height: 100vh;
  height: auto;
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
