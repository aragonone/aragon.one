import React from 'react';
import styled from 'styled-components';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Aragon One website</h1>
      </div>
    );
  }
}

export default Home;
