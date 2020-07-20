import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import TeamCard from './TeamCard';
import arrow from './assets/arrow.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Team extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const {index, direction} = this.state;
    return (
      <TeamSection id="team">
        <Container>
          <h6>
            <span className="grey">—</span> MEET THE TEAM
          </h6>
          <BreakPoint to="medium">
            <Carousel
              interval={null}
              nextIcon={<img src={arrow} />}
              prevIcon={<img src={arrow} />}
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}>
              <Carousel.Item>
                <TeamCard
                  name="Jorge Izquierdo"
                  twitter="izqui9"
                  position="CEO"
                  imageUrl="Jorge"
                  bio="Jorge is our CEO. He's a curious hacker and researcher pushing to make the decentralized web happen."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Brett Sun"
                  twitter="sohkai"
                  position="CTO"
                  imageUrl="Brett"
                  bio="Brett is our CTO. He's a highly curious full-stack engineer, a wizard both in frontend and Solidity."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Facundo Spagnuolo"
                  twitter="facuspagnuolo"
                  position="AN team lead"
                  imageUrl="Facu"
                  bio="Facu is our AN team lead. He is a researcher and security auditor, and the best asados chef you'll ever find."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="John Light"
                  twitter="lightcoin"
                  position="Governance lead"
                  imageUrl="John"
                  bio="John is leading Governance at the Aragon Association. He's a crypto OG, co-founder of Bitseed, and the one defining our community governance strategy."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Monica Zeng"
                  twitter="monicazng"
                  position="HR"
                  imageUrl="Monica"
                  bio="Monica is our HR. She has an international background specialized in strategy, management and executive coaching for startups and founders."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="María Gómez"
                  twitter="MyPaoG"
                  position="Product"
                  imageUrl="Maria"
                  bio="Maria works on Product. She is a reinvented lawyer who loves traveling and networking. She's researching the intersection of law, technology, and markets for our products."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Pierre Bertet"
                  twitter="bpierre"
                  position="Frontend dev"
                  imageUrl="Pierre"
                  bio="Pierre is our Frontend Engineer. He is passionate about crafting high quality products, and loves Free Software and the World Wide Web."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Luke Duncan"
                  twitter="lkngtn"
                  position="CPO"
                  imageUrl="Luke"
                  bio="Luke is our CPO. He loves to explore how blockchains enable novel forms of governance, how existing forms may perform in new contexts."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Bingen Eguzkitza"
                  twitter="bingentxu"
                  position="Solidity dev"
                  imageUrl="Bingen"
                  bio="Bingen is our Solidity Engineer. He is a long time open source software, hardware and data passionate."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Delfina Polito"
                  twitter="PolitoDelfina"
                  position="Frontend dev"
                  imageUrl="Delfi"
                  bio="Delfi is our Frontend Engineer. She loves bringing designs to life, being careful about details to make things shine is definitely part of her core."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Patricia Davila"
                  twitter="dizzypaty"
                  position="UX design"
                  imageUrl="Paty"
                  bio="Paty is our UX Designer. She orchestrates the collaboration between design, technology, and business making sure products are built around people. "
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Adrian García"
                  twitter="owisixseven"
                  position="Brand design"
                  imageUrl="Adri"
                  bio="Adrián is our Brand Designer. He is a multidisciplinary designer focused on branding, art direction and the audiovisual world."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Lorena González"
                  twitter="curritta"
                  position="Operations"
                  imageUrl="Lorena"
                  bio="Lorena is our Operations Assistant. She has worked as a secretary, assistant, and office manager in a very different range of industries."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Jack Gane"
                  twitter="JackGane_"
                  position="Marketing"
                  imageUrl="Jack"
                  bio="Jack works on Marketing. He's a high school dropout turned multidisciplinary entrepreneur that loves making music and helping people achieve their wildest dreams."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Martynas Prokopas"
                  twitter="promaty0"
                  position="Systems engineer"
                  imageUrl="Martinas"
                  bio="Martynas is our Systems Engineer. He holds a P.h.D. in Technological Physics Engineering. He loves solving complex problems and he finds building the future of web the most interesting one to work on."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Enrique  Ortiz"
                  twitter="cryptoyizus"
                  position="Frontend dev"
                  imageUrl="Enrique"
                  bio="Enrique is our Frontend Engineer, with love and passion for writing both code and music to make ideas reality."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Andy Hook"
                  twitter="Andy_Hook"
                  position="Frontend dev"
                  imageUrl="Andy"
                  bio="Andy is a passionate UI Engineer who sweats the details and loves working at the intersection between code and design."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Gabi Garcia"
                  twitter="0xGabi"
                  position="Software engineer"
                  imageUrl="Gabi"
                  bio="Gabi is our Software Engineer and an OG Aragon community contributor. Here he helps to build the tools to improve the internal and external developer experience."
                />
              </Carousel.Item>
              <Carousel.Item>
                <TeamCard
                  name="Luis Cuende"
                  twitter="licuende"
                  position="Advisor"
                  imageUrl="Luis"
                  bio="Luis is our Advisor and the Executive Director of the Aragon Association. He loves helping people solve unfair situation in the world through technology."
                />
              </Carousel.Item>
            </Carousel>
          </BreakPoint>
          <BreakPoint from="medium">
            <Carousel
              interval={null}
              nextIcon={<img src={arrow} />}
              prevIcon={<img src={arrow} />}
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Jorge Izquierdo"
                    twitter="izqui9"
                    position="CEO"
                    imageUrl="Jorge"
                    bio="Jorge is our CEO. He's a curious hacker and researcher pushing to make the decentralized web happen."
                  />
                  <TeamCard
                    name="Brett Sun"
                    twitter="sohkai"
                    position="CTO"
                    imageUrl="Brett"
                    bio="Brett is our CTO. He's a highly curious full-stack engineer, a wizard both in frontend and Solidity."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Facundo Spagnuolo"
                    twitter="facuspagnuolo"
                    position="AN team lead"
                    imageUrl="Facu"
                    bio="Facu is our AN team lead. He is a researcher and security auditor, and the best asados chef you'll ever find."
                  />
                  <TeamCard
                    name="John Light"
                    twitter="lightcoin"
                    position="Governance lead"
                    imageUrl="John"
                    bio="ohn is leading Governance at the Aragon Association. He's a crypto OG, co-founder of Bitseed, and the one defining our community governance strategy."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Monica Zeng"
                    twitter="monicazng"
                    position="HR"
                    imageUrl="Monica"
                    bio="Monica is our HR. She has an international background specialized in strategy, management and executive coaching for startups and founders."
                  />
                  <TeamCard
                    name="María Gómez"
                    twitter="MyPaoG"
                    position="Product"
                    imageUrl="Maria"
                    bio="Maria works on Product. She is a reinvented lawyer who loves traveling and networking. She's researching the intersection of law, technology, and markets for our products."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Pierre Bertet"
                    twitter="bpierre"
                    position="Frontend dev"
                    imageUrl="Pierre"
                    bio="Pierre is our Frontend Engineer. He is passionate about crafting high quality products, and loves Free Software and the World Wide Web."
                  />
                  <TeamCard
                    name="Luke Duncan"
                    twitter="lkngtn"
                    position="CPO"
                    imageUrl="Luke"
                    bio="Luke is our CPO. He loves to explore how blockchains enable novel forms of governance, how existing forms may perform in new contexts."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Bingen Eguzkitza"
                    twitter="bingentxu"
                    position="Solidity dev"
                    imageUrl="Bingen"
                    bio="Bingen is our Solidity Engineer. He is a long time open source software, hardware and data passionate."
                  />
                  <TeamCard
                    name="Delfina Polito"
                    twitter="PolitoDelfina"
                    position="Frontend dev"
                    imageUrl="Delfi"
                    bio="Delfi is our Frontend Engineer. She loves bringing designs to life, being careful about details to make things shine is definitely part of her core."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Patricia Davila"
                    twitter="dizzypaty"
                    position="UX design"
                    imageUrl="Paty"
                    bio="Paty is our UX Designer. She orchestrates the collaboration between design, technology, and business making sure products are built around people. "
                  />
                  <TeamCard
                    name="Adrian García"
                    twitter="owisixseven"
                    position="Brand design"
                    imageUrl="Adri"
                    bio="Adrián is our Brand Designer. He is a multidisciplinary designer focused on branding, art direction and the audiovisual world."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Lorena González"
                    twitter="curritta"
                    position="Operations"
                    imageUrl="Lorena"
                    bio="Lorena is our Operations Assistant. She has worked as a secretary, assistant, and office manager in a very different range of industries."
                  />
                  <TeamCard
                    name="Jack Gane"
                    twitter="JackGane_"
                    position="Marketing"
                    imageUrl="Jack"
                    bio="Jack works on Marketing. He's a high school dropout turned multidisciplinary entrepreneur that loves making music and helping people achieve their wildest dreams."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Martynas Prokopas"
                    twitter="promaty0"
                    position="Systems engineer"
                    imageUrl="Martinas"
                    bio="Martynas is our Systems Engineer. He holds a P.h.D. in Technological Physics Engineering. He loves solving complex problems and he finds building the future of web the most interesting one to work on."
                  />
                  <TeamCard
                    name="Enrique Ortiz"
                    twitter="cryptoyizus"
                    position="Frontend dev"
                    imageUrl="Enrique"
                    bio="Enrique is our Frontend Dev, with love and passion for writing both code and music to make ideas reality."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Gabi Garcia"
                    twitter="0xGabi"
                    position="Software engineer"
                    imageUrl="Gabi"
                    bio="Gabi is our Software Engineer and an OG Aragon community contributor. Here he helps to build the tools to improve the internal and external developer experience."
                  />
                  <TeamCard
                    name="Andy Hook"
                    twitter="Andy_Hook"
                    position="Frontend dev"
                    imageUrl="Andy"
                    bio="Andy is a passionate UI Engineer who sweats the details and loves working at the intersection between code and design."
                  />
                </TeamContainer>
              </Carousel.Item>
              <Carousel.Item>
                <TeamContainer>
                  <TeamCard
                    name="Luis Cuende"
                    twitter="licuende"
                    position="Advisor"
                    imageUrl="Luis"
                    bio="Luis is our Advisor and the Executive Director of the Aragon Association. He loves helping people solve unfair situation in the world through technology."
                  />
                </TeamContainer>
              </Carousel.Item>
            </Carousel>
          </BreakPoint>
        </Container>
      </TeamSection>
    );
  }
}

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
