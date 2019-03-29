import React from 'react';
import styled from 'styled-components';
import modalImage from './assets/logo-menu.gif';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import twitter from './assets/twitter.svg';
import speech from './assets/speech.svg';
import background from './assets/hero-background.svg';
import { Link } from 'react-static';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);


class AragonOneModal  extends React.Component {
  render() {
    return (
      <StyledModal
        {...this.props}
        size="lg"
        aria-labelledby="title"
      >
        <ImageBox>
          <MenuHeader />
          <div className="image-container">
            <img src={modalImage} />
          </div>
        </ImageBox>
        <LinksBox>
          <MenuHeader>
            <div><a target="_blank" href=""><img src={speech}/></a></div>
            <div><a target="_blank" href="https://twitter.com/AragonOneTeam"><img src={twitter}/></a></div>
          </MenuHeader>
          <div className="links">
            <h6>WELCOME ARAGON ONE CREW</h6>
            <ul>
              <li>
                <Link to={'/#about'} onClick={this.props.onHide}>About</Link>
              </li>
              <li>
                <Link to={'/#team'} onClick={this.props.onHide}>Team</Link>
              </li>
              <li>
                <Link to={'/#jobs'} onClick={this.props.onHide}>Jobs</Link>
              </li>
              <li>
                <Link to={'/#philosophy'} onClick={this.props.onHide}>Philosophy</Link>
              </li>
              <li>
                <Link to={'/#blog'} onClick={this.props.onHide}>Blog</Link>
              </li>
            </ul>
          </div>
        </LinksBox>
      </StyledModal>
    );
  }
}


class MenuModal extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { modalShow: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    let show = this.state.modalShow;
    this.setState({ modalShow: !show });
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>
        <Button
          className={this.state.modalShow == true ? "hamburger hamburger-spin is-active" : "hamburger hamburger-spin"}
          type="button"
          onClick={this.handleClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </Button>

        <AragonOneModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}

const MenuHeader = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: solid 1px #3a3a3a;
  display: flex;
  justify-content: flex-end;
  div {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: solid 1px #3a3a3a;
  }
`

const LinksBox = styled.div`
  ${large('width: calc(100% - 400px);')};
  width: 100%;
  .links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    background: url(${background}) top no-repeat;
    background-size: 126% 124%;
    position: relative;
  }
  a {
    color: white!important;
    text-decoration: none!important;
  }
  h6 {
    position: absolute;
    right: 0;
    transform-origin: 0 50%;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 6px;
    transform: rotate(-90deg) translate(-50%,calc(100% + 310px));
  }
`
const ImageBox = styled.div`
  width: 400px;
  border-right: solid 1px #3a3a3a;
  display: none;
  ${large('display: flex; text-align: center; flex-direction: column;')};
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 70px);
  }
`
const StyledModal = styled(Modal)`
  background: black;
  transition: all .25s linear;
  .modal-dialog {
    max-width: 80%;
    width: 1000px;
    min-width: 50%;
    margin: 100px auto;
  }
  .modal-content {
    background: black;
    border: solid 1px #3a3a3a;
    border-radius: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;

    img {
      max-width: 350px;
    }
    ul {
      list-style-type: none;
      padding: 60px 0;
      ${large('padding: 0;')};
    }
    li {
      font-family: 'FontBold';
      font-size: 2.92rem;
      line-height: 4.42rem;
      ${large('font-size: 4.35rem; line-height: 6.57rem;')};
    }
  }
`
export default MenuModal;
