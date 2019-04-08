import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Quotes = () => (
  <QuotesSection>
    <Container>
      <BreakPoint to="medium">
        <h3>
          Decentralized organizations can <br />
          solve the world’s worst problems. <br />
          That’s{' '}
          <span className="mobile-pink">why we are building Aragon.</span>
        </h3>
        <br />
        <h6>
          <span className="grey">—</span> LUIS CUENDE, CEO
        </h6>
      </BreakPoint>
      <BreakPoint from="medium">
        <Fade bottom duration={1200} delay={200}>
          <div>
            <h3>
              Decentralized organizations can <br />
              solve the world’s worst problems. <br />
              That’s <span className="pink">why we are building Aragon.</span>
            </h3>
          </div>
        </Fade>
      </BreakPoint>
    </Container>
  </QuotesSection>
);

const QuotesSection = styled.section`
  height: auto;
  padding: 0 0 50px 0;
  ${medium('padding: 100px 0;')};
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  h6 {
    margin-bottom: 0 !important;
  }
  h3 {
    font-family: 'FontBold';
    word-break: break-word;
    text-align: left;
    margin: 0;
    line-height: 1.2;
    font-size: 3.28rem;
    ${medium('font-size: 5.71rem; line-height: 7rem;')};
    letter-spacing: -0.5px;
    color: #ffffff;
    .pink {
      color: #ff5d5d;
      background: -webkit-linear-gradient(left, #ff3333, #ff7c56);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .mobile-pink {
      color: #ff5d5d;
    }
  }
`;
export default Quotes;
