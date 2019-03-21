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
  <WorkConditionsSection>
    <Container>
      <div>
        <h5>WORK WITH US</h5>
        <h2>Our work conditions</h2>
      </div>
      <Box>
        <Item className="small">
          <Slide bottom duration={1200} delay={200}>
            <img src={image1}/>
          </Slide>
          <Slide bottom duration={1200} delay={300}>
          <p>100% Remote - you can set your optimal workspace and schedule.</p>
          </Slide>
        </Item>
        <Item className="medium">
          <Slide bottom duration={1200} delay={400}>
            <img src={image2}/>
          </Slide>
          <Slide bottom duration={1200} delay={500}>
          <p>
            Paid Time Off - you have the flexibility to decide when to take your
            vacations.
          </p>

          </Slide>
        </Item>
        <Item>
          <Slide bottom duration={1200} delay={600}>
            <img src={image3}/>
          </Slide>
          <Slide bottom duration={1200} delay={700}>
          <p>
            Salary Allocation - you decide how to allocate your salary in ETH,
            DAI and/or ANT.
          </p>
          </Slide>
        </Item>
        <Item>
          <Slide bottom duration={1200} delay={800}>
            <img src={image4}/>
          </Slide>
          <Slide bottom duration={1200} delay={900}>
          <p>
            Competitive Compensation - we set salaries based on your leverage,
            not only your location.
          </p>
          </Slide>
        </Item>
        <Item>
          <Slide bottom duration={1200} delay={1000}>
            <img src={image5}/>
          </Slide>
          <Slide bottom duration={1200} delay={1100}>
          <p>
            Quarterly Offsites - join the team in inspiring locations to build,
            meet, and have fun.
          </p>
          </Slide>
        </Item>
        <Item>
          <Slide bottom duration={1200} delay={1200}>
            <img src={image6}/>
          </Slide>
          <Slide bottom duration={1200} delay={1300}>
          <p>
            Side Projects - we encourage you to spend some paid time
            contributing to the broader ecosystem.
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
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  h2 {
    font-family: 'FontRegular';
    line-height: 48px;
    font-size: 32px;
    text-align: center;
    color: #ffffff;
    margin-top: 0;
  }
  h5 {
    font-family: 'FontRegular';
    margin: 0;
    font-size: 14px;
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
  padding: 0 30px;
  &.small {
    padding: 0 55px;
  }
  &.medium {
    padding: 0 40px;
  }
  p {
    font-family: 'FontRegular';
    line-height: 32px;
    padding: 20px 0;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
  }
`;
export default WorkConditions;
