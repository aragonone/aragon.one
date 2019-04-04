import React from 'react';
import styled from 'styled-components';
import A1 from './assets/team/A1.svg';
import twitter from './assets/twitter-team.svg';
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
        {props.bio}
      </p>
      <a href={"https://twitter.com/" + props.twitter} target="_blank"><img src={twitter} /></a>
    </Description>
  </TeamCardContainer>
);

const TeamCardContainer = styled.div`
  border: solid 1px #3a3a3a;
  max-width: 100%;
  margin: 0;
  width: 100%;
  ${medium('max-width: 50%; margin: 0 15px; width: 39vw;')};
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
    font-size: 1rem;
    letter-spacing: 2.6px;
  }
`;

const Name = styled.div`
  font-family: 'FontRegular';
  text-transform: uppercase;
  font-size: 1.64rem;
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
  padding: 20px;
  p {
    font-family: 'FontRegular';
    line-height: 2.57rem;
    font-size: 1.28rem;
    margin: 0;
    min-height: 115px;
  }
  a:hover {
    opacity: 0.8;
  }
`;
export default TeamCard;
