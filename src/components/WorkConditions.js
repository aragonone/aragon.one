import React from 'react';
import styled from 'styled-components';
import image1 from './assets/work-conditions/1.svg';
import image2 from './assets/work-conditions/2.svg';
import image3 from './assets/work-conditions/3.svg';
import image4 from './assets/work-conditions/4.svg';
import image5 from './assets/work-conditions/5.svg';
import image6 from './assets/work-conditions/6.svg';
import Slide from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const WorkConditions = () => (
  <WorkConditionsSection id="philosophy">
    <Container>
      <div>
        <h5>WORK WITH US</h5>
        <h2>Our work conditions</h2>
      </div>
      <Box>
        <Item className="medium">
          <Slide bottom duration={1200} delay={200}>
            <img src={image1} />
          </Slide>
          <Slide bottom duration={1200} delay={200}>
            <p>
              100% remote team - talent has no borders, our team works from all
              around the world
            </p>
          </Slide>
        </Item>
        <Item className="small">
          <Slide bottom duration={1200} delay={300}>
            <img src={image2} />
          </Slide>
          <Slide bottom duration={1200} delay={300}>
            <p>
              Focus driven - we don’t track hours, we encourage the maker’s schedule
            </p>
          </Slide>
        </Item>
        <Item>
          <Slide bottom duration={1200} delay={400}>
            <img src={image4} />
          </Slide>
          <Slide bottom duration={1200} delay={400}>
            <p>
              Dynamic team - we’re a small team and we want to keep it this way to increase individual leverage
            </p>
          </Slide>
        </Item>
        <Item>
          <Slide bottom duration={1200} delay={500}>
            <img src={image5} />
          </Slide>
          <Slide bottom duration={1200} delay={500}>
            <p>
              Quarterly offsites - we get together in inspiring locations to build, meet and have fun
            </p>
          </Slide>
        </Item>
        <Item>
          <Slide bottom duration={1200} delay={600}>
            <img src={image6} />
          </Slide>
          <Slide bottom duration={1200} delay={600}>
            <p>
              Side projects - we encourage you to spend some time contributing to the broader ecosystem
            </p>
          </Slide>
        </Item>
        <Item className="x-small">
          <Slide bottom duration={1200} delay={700}>
            <img src={image3} />
          </Slide>
          <Slide bottom duration={1200} delay={700}>
            <p>
              Crypto-first - you decide how to allocate your salary in ANT/DAI/ETH
            </p>
          </Slide>
        </Item>
      </Box>
    </Container>
  </WorkConditionsSection>
);

const WorkConditionsSection = styled.section`
  background-color: #0f0f0f;
  height: auto;
  padding: 100px 0;
  text-align: center;
  margin-top: 70px;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  h2 {
    font-family: 'FontRegular';
    line-height: 1.5;
    ${medium('line-height: 3.42;')};
    font-size: 2.28rem;
    text-align: center;
    color: #ffffff;
    margin-top: 0;
  }
  h5 {
    font-family: 'FontRegular';
    margin: 0;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 2.6px;
    color: #ff7671;
  }
`;
const Box = styled.div`
  display: grid;
  margin-top: 70px;
  ${medium(
    'grid-template-columns: calc(33% - 15px) calc(33% - 15px) calc(33% - 15px); grid-template-rows: auto auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;
const Item = styled.div`
  ${medium('padding: 0 30px')};
  &.small {
  ${medium('padding: 0 55px')};
  }
  &.medium {
  ${medium('padding: 0 40px')};
  }
  &.x-small {
  ${medium('padding: 0 73px')};
  }
  p {
    font-family: 'FontRegular';
    line-height: 2.28rem;
    padding: 20px 0;
    font-size: 1.42rem;
    text-align: center;
    color: #ffffff;
  }
`;
export default WorkConditions;
