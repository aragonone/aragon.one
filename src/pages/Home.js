import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Quotes from '../components/Quotes';
import WorkConditions from '../components/WorkConditions';
import styled from 'styled-components';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero/>
        <About/>
        <Quotes/>
        <WorkConditions/>
      </div>
    );
  }
}

export default Home;
