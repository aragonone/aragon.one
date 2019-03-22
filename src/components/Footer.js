import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo-footer.svg'
import signature from './assets/signature.svg'

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const Footer = () => (
  <FooterSection>
    <Container>
      <div>
        <A1Logo src={logo}/>
        <a>Rocket chat</a>
        <a>Twitter</a>
        <a>Forum</a>
      </div>
      <div>
        <img src={signature}/>
      </div>
    </Container>
  </FooterSection>
);

const FooterSection = styled.section`
  background-color: black;
  height: auto;
  margin: 30px 0 30px 0;
  text-align: center;
  overflow: hidden;
`;
const A1Logo = styled.img`
  padding-right: 15px;
`
const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  border-top: solid 1px #3A3A3A;
  a {
    font-family: 'FontRegular';
    line-height: 29px;
    font-size: 14px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    padding: 0px 15px;
    cursor: pointer;
  }
  a:hover {
    opacity: 0.8;
  }
`;

export default Footer;
