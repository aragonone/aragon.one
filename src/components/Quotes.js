import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Quotes = () => (
  <QuotesSection>
    <Container>
      <Fade bottom duration={1200} delay={200}>
        <div>
          <h3>
            We are building products that <br />
            has the potential to impact <br />
            every <span className="pink">person on the planet</span>
          </h3>
          <br />
          <h6>
            <span className="grey">—</span> LUIS CUENDE, CEO
          </h6>
        </div>
      </Fade>
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
  h6 {
    margin-bottom: 0 !important;
  }
  h3 {
    font-family: 'FontBold';
    text-align: left;
    margin: 0;
    line-height: 1.2;
    font-size: 46px;
    ${medium('font-size: 86px; line-height: 98px;')};
    letter-spacing: -0.5px;
    color: #ffffff;
    max-width: 1121px;
    .pink {
      color: #ff5d5d;
      background: -webkit-linear-gradient(left, #ff3333, #ff7c56);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
export default Quotes;
