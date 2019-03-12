import React from 'react';
import styled from 'styled-components';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Quotes = () => (
  <QuotesSection>
    <Container>
      <div>
        <h3>
          We are building products that <br />
          has the potential to impact <br />
          every <span className="pink">person on the planet</span>
        </h3>
      </div>
    </Container>
  </QuotesSection>
);

const QuotesSection = styled.section`
  height: auto;
  padding: 100px 0;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  h3 {
    font-family: 'FontBold';
    text-align: left;
    margin: 0;
    line-height: 98px;
    font-size: 78px;
    letter-spacing: -0.5px;
    color: #ffffff;
    max-width: 1024px;
    margin: auto;
    .pink {
      color: #ff5d5d;
    }
  }
`;
export default Quotes;
