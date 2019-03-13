import React from 'react';
import styled from 'styled-components';
import hiring from './assets/hiring.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const HiringProcess = () => (
  <HiringProcessSection>
    <Container>
      <div>
        <h6>
          <span className="grey">—</span> OUR HIRING PROCESS
        </h6>
      </div>
      <img src={hiring}/>
    </Container>
  </HiringProcessSection>
);

const HiringProcessSection = styled.section`
  height: auto;
  padding: 100px 0;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;

`;
export default HiringProcess;
