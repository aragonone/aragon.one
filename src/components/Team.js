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
              position="CEO"
              imageUrl="Luis"
            />
            <TeamCard
              name="Jorge Izquierdo"
              position="CTO"
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
              name="María Gómez"
              position="Ecosystem"
              imageUrl="Maria"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Luke Duncan"
              position="Reaserch"
              imageUrl="Luke"
            />
            <TeamCard
              name="Brett Sun"
              position="Dev lead"
              imageUrl="Brett"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Bingen Eguzkitza"
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
              name="Pierre Bertet"
              position="Frontend dev"
              imageUrl="Pierre"
            />
            <TeamCard
              name="Gorka Ludlow"
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
              name="Daniel Norman"
              position="Web3 dev"
              imageUrl="Daniel"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Jouni Helminen"
              position="Product design"
              imageUrl="Jouni"
            />
            <TeamCard
              name="Patricia Davila"
              position="UX design"
              imageUrl="Paty"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Adrian García"
              position="Brand design"
              imageUrl="Adri"
            />
            <TeamCard
              name="John Light"
              position="Communications lead"
              imageUrl="John"
            />
          </TeamContainer>
        </Carousel.Item>
        <Carousel.Item>
          <TeamContainer>
            <TeamCard
              name="Tatu Kärki"
              position="Communication"
              imageUrl="Tatu"
            />
            <TeamCard
              name="Lorena González"
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
  padding: 100px 0 100px 0;
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
