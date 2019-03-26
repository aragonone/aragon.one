import React from 'react';
import styled from 'styled-components';
import modalImage from './assets/logo-menu.gif';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);


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
          <img src={modalImage} />
        </ImageBox>
        <LinksBox>
          <MenuHeader />
          <div className="links">
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Philosophy</a>
              </li>
              <li>
                <a>Blog</a>
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
`

const LinksBox = styled.div`
  ${medium('width: calc(100% - 400px);')};
  width: 100%;
  .links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const ImageBox = styled.div`
  width: 400px;
  border-right: solid 1px #3a3a3a;
  display: none;
  ${medium('display: flex; text-align: center; flex-direction: column;')};
`
const StyledModal = styled(Modal)`
  background: black;
  transition: all .25s linear;
  .modal-dialog {
    max-width: 80%!important;
    width: 80%;
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
      ${medium('padding: 0;')};
    }
    li {
      font-family: 'FontBold';
      font-size: 41px;
      line-height: 62px;
      ${medium('font-size: 61px; line-height: 92px;')};
    }
  }
`
export default MenuModal;
