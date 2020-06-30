import React from 'react';
import styled from 'styled-components';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class PrivacyObjection extends React.Component {
  render() {
    return (
      <PrivacyObjectionContainer>
        <div>
          If you do not want us to retain your personal data after completion of
          the recruiting processes you are now applying to, please follow this{' '}
          <a href="mailto:hiring@aragon.one">link</a>. If you object now, you
          can still submit your application which will not be affected, as the 2
          years retention period post-recruitment process is not a requisite for
          us to consider your application. You can also object at any time after
          submitting your application.
        </div>
      </PrivacyObjectionContainer>
    );
  }
}

const PrivacyObjectionContainer = styled.div`
  padding: 100px 15%;
  font-family: 'FontRegular';
  a {
    color: #ff7671;
  }
  h2 {
    font-size: 1.6rem;
    margin-top: 20px;
  }
  h3 {
    font-size: 1.25rem;
    margin-top: 16px;
  }
  b {
    font-weight: 900;
  }
`;
export default PrivacyObjection;
