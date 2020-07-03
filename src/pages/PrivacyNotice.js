import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class PrivacyNotice extends React.Component {
  render() {
    return (
      <OuterContainer>
        <Navbar />
        <PrivacyNoticeContainer>
          <h1>Privacy notice</h1>
          <div>
            By completing this form and submitting your application you are
            consenting that we,{' '}
            <a href="https://aragon.one" target="_blank">
              Aragon One AG
            </a>
            , process the personal data you provide us for managing the
            recruitment process corresponding to the job opportunity you are
            applying to until the open role is filled. Upon completion of the
            recruitment process, unless you{' '}
            <a
              href="https://docs.google.com/document/d/1nqeomeCgoVIxfDjMwHXeqH1-nm2mhU70yNhCvw_oQPE/edit"
              target="_blank">
              object
            </a>
            , we will retain your personal data for two (2) additional years in
            order to inform you about future job opportunities. After those two
            (2) years, we will either delete your personal data or request your
            consent annually to retain them for future job opportunities. See
            our Recruiting{' '}
            <a href="https://aragon.one/privacy-policy" target="_blank">
              Privacy Policy
            </a>{' '}
            for further information.
          </div>
        </PrivacyNoticeContainer>
        <Footer />
      </OuterContainer>
    );
  }
}

const PrivacyNoticeContainer = styled.div`
  padding: 100px 15%;
  min-height: 82vh;
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

const OuterContainer = styled.div`
  width: 100vw;
`;
export default PrivacyNotice;
