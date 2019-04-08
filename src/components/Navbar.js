import React from 'react'
import styled from 'styled-components'
import { breakpoint, BreakPoint} from '@aragon/ui'
const medium = css => breakpoint('medium', css)
import logo from './assets/logo-footer.svg'
import MenuModal from './MenuModal';

class Navbar extends React.Component {
  render() {
    return (
      <AragonNavbar>
        <LogoLink to="/">
          <img src={logo} />
        </LogoLink>
        <MenuModal />
      </AragonNavbar>
    )
  }
}

const AragonNavbar = styled.div`
  width: 80%;
  height: 80px;
  background: transparent;
  position:absolute;
  top:0;
  left: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3000;
`

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  img {
    height: 50px;
  }
`
export default Navbar
