import React from 'react';
import styled from 'styled-components';
import A1 from './assets/team/A1.svg';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const TeamCard = ({...props}) => (
  <TeamCardContainer>
    <Position>
      <div>
        <p>{props.position}</p>
      </div>
      <div>
        <img src={A1} />
      </div>
    </Position>
    <Name>{props.name}</Name>
    <Photo src={require(`./assets/team/${props.imageUrl}.gif`)} />
    <Description>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </Description>
  </TeamCardContainer>
);

const TeamCardContainer = styled.div`
  border: solid 1px #3a3a3a;
  max-width: 100%;
  margin: 0;
  ${medium('max-width: 50%; margin: 0 15px;')};
`;

const Position = styled.div`
  border-bottom: solid 1px #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  div {
    padding: 0 15px;
  }
  p {
    margin: 0;
    font-family: 'FontRegular';
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2.6px;
  }
`;

const Name = styled.div`
  font-family: 'FontRegular';
  text-transform: uppercase;
  font-size: 23px;
  letter-spacing: 3px;
  height: 70px;
  display: flex;
  padding: 0 15px;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
`;

const Description = styled.div`
  p {
    font-family: 'FontRegular';
    line-height: 36px;
    font-size: 18px;
    padding: 20px;
    margin: 0;
  }
`;
export default TeamCard;
