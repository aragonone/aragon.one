import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Quotes from '../components/Quotes';
import Team from '../components/Team';
import JobOpenings from '../components/JobOpenings';
import Remote from '../components/Remote';
import HiringProcess from '../components/HiringProcess';
import Company from '../components/Company';
import WorkConditions from '../components/WorkConditions';
import GhostPosts from '../components/GhostPosts';
import Footer from '../components/Footer';
import styled from 'styled-components';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Hero />
        <About />
        <Quotes />
        <Team />
        <Remote />
        <WorkConditions />
        <JobOpenings />
        <HiringProcess />
        <Company />
        <GhostPosts />
        <Footer />
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  width: 100vw;
  h6 {
    font-family: 'FontRegular';
    font-size: 1rem;
    letter-spacing: 2.6px;
    line-height: 1;
    margin: 0 0 70px 0;
    .grey {
      color: #525252;
    }
  }
`;
export default Home;
