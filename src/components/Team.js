import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import TeamCard from './TeamCard';
import arrow from './assets/arrow.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Team = () => (
  <TeamSection id="team">
    <Container>
      <h6>
        <span className="grey">—</span> MEET THE TEAM
      </h6>
      <BreakPoint to="medium">
        <Carousel nextIcon={<img src={arrow} />}>
          <Carousel.Item>
            <TeamCard name="Luis Ivan Cuende" position="CEO" imageUrl="Luis" bio="Luis is our CEO. He loves helping people solve unfair situations in the world through technology and he's currently leading our product."/>
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard name="Jorge Izquierdo" position="CTO" imageUrl="Jorge" bio="Jorge is our CTO. He's a curious hacker, creator of multiple apps for iOS, macOs and Pebble, and currently enjoying researching about governance."/>
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard name="Monica Zeng" position="HR" imageUrl="Monica" bio="Monica is our HR. She has an international background specialized in strategy, management and executive coaching for startups and founders."/>
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="María Gómez"
              position="Ecosystem"
              imageUrl="Maria"
              bio="María is our Ecosystem Developer. She is a reinvented lawyers who loves traveling, networking and technology."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard name="Luke Duncan" position="Reaserch" imageUrl="Luke" bio="Luke is our Research Lead. He loves to explore how blockchains enable novel forms of governance and how existing forms may perform in new contexts."/>
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard name="Brett Sun" position="Dev lead" imageUrl="Brett" bio="Brett is our Tech Lead. He's a highly curious full-stack engineer, a wizard both in frontend and solidity."/>
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Bingen Eguzkitza"
              position="Solidity dev"
              imageUrl="Bingen"
              bio="Bingen is our Solidity Engineer. He is a long time open source software, hardware and data passionate."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Facundo Spagnuolo"
              position="Solidity dev"
              imageUrl="Facu"
              bio="Facu is our Solidity Engineer. He is a researcher and security audit, and the best asados chef you'll ever find."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Pierre Bertet"
              position="Frontend dev"
              imageUrl="Pierre"
              bio="Pierre is our Frontend Engineer. He is passionate about crafting high quality products, and loves Free Software and the World Wide Web."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Gorka Ludlow"
              position="Frontend dev"
              imageUrl="Gorka"
              bio="Gorka is our Frontend Engineer. He is passionate about life and a tinkerer, always ready to demo you his new side project."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Delfina Polito"
              position="Frontend dev"
              imageUrl="Delfi"
              bio="Delfi is our Frontend Engineer. She loves bringing designs to life, being careful to details to make things shine is definitely part of her core."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Daniel Norman"
              position="Web3 dev"
              imageUrl="Daniel"
              bio="Daniel is our Web3 Engineer. He is a globetrotter at heart with an interest in culture and how people live their lives."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Patricia Davila"
              position="UX design"
              imageUrl="Paty"
              bio="Paty is our UX Designer. She orchestrates the collaboration between design, technology, and business making sure products are built around people. "
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Adrian García"
              position="Brand design"
              imageUrl="Adri"
              bio="Adrián is our Brand Designer. He is a multidisciplinary designer focused on branding, art direction and the audiovisual world."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="John Light"
              position="Communications lead"
              imageUrl="John"
              bio="John is our Communications Lead. He's a crypto OG, co-founder of Bitseed, and advisor to cryptocurrency startups and investors."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Tatu Kärki"
              position="Communication"
              imageUrl="Tatu"
              bio="Tatu is works on Communications. He loves helping people solve their problems and supporting and spreading the word about decentralization."
            />
          </Carousel.Item>
          <Carousel.Item>
            <TeamCard
              name="Lorena González"
              position="Opetations"
              imageUrl="Lorena"
              bio="Lorena is our Operations Assistant. She has worked as a secretary, assistant, and office manager in a very different range of industries."
            />
          </Carousel.Item>
        </Carousel>
      </BreakPoint>
      <BreakPoint from="medium">
        <Carousel nextIcon={<img src={arrow} />}>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="Luis Ivan Cuende"
                position="CEO"
                imageUrl="Luis"
                bio="Luis is our CEO. He loves helping people solve unfair situations in the world through technology and he's currently leading our product."
              />
              <TeamCard
                name="Jorge Izquierdo"
                position="CTO"
                imageUrl="Jorge"
                bio="Jorge is our CTO. He's a curious hacker, creator of multiple apps for iOS, macOs and Pebble, and currently enjoying researching about governance."
              />
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard name="Monica Zeng" position="HR" imageUrl="Monica" bio="Monica is our HR. She has an international background specialized in strategy, management and executive coaching for startups and founders."/>
              <TeamCard
                name="María Gómez"
                position="Ecosystem"
                imageUrl="Maria"
                bio="María is our Ecosystem Developer. She is a reinvented lawyers who loves traveling, networking and technology."
              />
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="Luke Duncan"
                position="Reaserch"
                imageUrl="Luke"
                bio="Luke is our Research Lead. He loves to explore how blockchains enable novel forms of governance and how existing forms may perform in new contexts."
              />
              <TeamCard name="Brett Sun" position="Dev lead" imageUrl="Brett" bio="Brett is our Tech Lead. He's a highly curious full-stack engineer, a wizard both in frontend and solidity."/>
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="Bingen Eguzkitza"
                position="Solidity dev"
                imageUrl="Bingen"
                bio="Bingen is our Solidity Engineer. He is a long time open source software, hardware and data passionate."
              />
              <TeamCard
                name="Facundo Spagnuolo"
                position="Solidity dev"
                imageUrl="Facu"
                bio="Facu is our Solidity Engineer. He is a researcher and security audit, and the best asados chef you'll ever find."
              />
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="Pierre Bertet"
                position="Frontend dev"
                imageUrl="Pierre"
                bio="Pierre is our Frontend Engineer. He is passionate about crafting high quality products, and loves Free Software and the World Wide Web."
              />
              <TeamCard
                name="Gorka Ludlow"
                position="Frontend dev"
                imageUrl="Gorka"
                bio="Gorka is our Frontend Engineer. He is passionate about life and a tinkerer, always ready to demo you his new side project."
              />
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="Delfina Polito"
                position="Frontend dev"
                imageUrl="Delfi"
                bio="Delfi is our Frontend Engineer. She loves bringing designs to life, being careful to details to make things shine is definitely part of her core."
              />
              <TeamCard
                name="Daniel Norman"
                position="Web3 dev"
                imageUrl="Daniel"
                bio="Daniel is our Web3 Engineer. He is a globetrotter at heart with an interest in culture and how people live their lives."
              />
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="Adrian García"
                position="Brand design"
                imageUrl="Adri"
                bio="Adrián is our Brand Designer. He is a multidisciplinary designer focused on branding, art direction and the audiovisual world."
              />
              <TeamCard
                name="Patricia Davila"
                position="UX design"
                imageUrl="Paty"
                bio="Paty is our UX Designer. She orchestrates the collaboration between design, technology, and business making sure products are built around people. "
              />
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="John Light"
                position="Communications lead"
                imageUrl="John"
                bio="John is our Communications Lead. He's a crypto OG, co-founder of Bitseed, and advisor to cryptocurrency startups and investors."
              />
              <TeamCard
                name="Tatu Kärki"
                position="Communication"
                imageUrl="Tatu"
                bio="Tatu is works on Communications. He loves helping people solve their problems and supporting and spreading the word about decentralization."
              />
            </TeamContainer>
          </Carousel.Item>
          <Carousel.Item>
            <TeamContainer>
              <TeamCard
                name="Lorena González"
                position="Opetations"
                imageUrl="Lorena"
                bio="Lorena is our Operations Assistant. She has worked as a secretary, assistant, and office manager in a very different range of industries."
              />
            </TeamContainer>
          </Carousel.Item>
        </Carousel>
      </BreakPoint>
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
  align-items: stretch;
  justify-content: space-between;
  margin: 0 -15px;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
`;
export default Team;
