import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Quotes from '../components/Quotes';
import Team from '../components/Team';
import Company from '../components/Company';
import WorkConditions from '../components/WorkConditions';
import styled from 'styled-components';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Hero/>
        <About/>
        <Quotes/>
        <Team/>
        <WorkConditions/>
        <Company/>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  h6 {
    font-family: 'FontRegular';
    font-size: 14px;
    letter-spacing: 2.6px;
    line-height: 1;
    margin: 0 0 70px 0;
    .grey {
      color: #525252;
    }
  }
`
export default Home;
