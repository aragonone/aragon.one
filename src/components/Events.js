import React from 'react';
import styled from 'styled-components';
import {breakpoint, BreakPoint, Button} from '@aragon/ui';
import offsites from './assets/offsites.png';
import logo from './assets/logo-footer.svg';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Events extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <EventsSection id="events">
        <Container>
          <h6>
            <span className="grey">—</span> EVENTS
          </h6>
          <Box>
            <Event>
              <iframe
                src="https://www.youtube-nocookie.com/embed/yeK2H4jT5Jk?rel=0&amp;ecver=2"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <h6>
                <span>—</span> OUR LATEST EVENT
              </h6>
              <h1>#AraCon2019</h1>
            </Event>
            <Offsite>
              <img src={logo} />
              <h6>LATEST TEAM OFFSITE</h6>
              <h2>LISBON, PT</h2>
            </Offsite>
          </Box>
        </Container>
      </EventsSection>
    );
  }
}

const Event = styled.div`
  background: linear-gradient(221.23deg, #ff815c 0%, #ff5d5d 100.4%);
  padding: 30px;
  width: 100%;
  ${medium('width: 70%;')};
  iframe {
    width: 100%;
    height: 23vw;
  }
  h6 {
    margin: 60px 0 20px 0 !important;
  }
  h1 {
    font-size: 10vw;
    ${medium('font-size: 7vw;')};
  }
`;
const Offsite = styled.div`
  background: url(${offsites}) top no-repeat;
  background-size: cover;
  background-color: #191919;
  padding: 30px;
  width: 100%;
  ${medium('width: 30%;')};
  text-align: center;
  h6 {
    margin: 20px 0 20px 0!important;
    line-height: 1.4!important;
  }
  h2 {
    font-size: 22px;
    letter-spacing: 4px;
    color: #FFFFFF;
  }
`;

const EventsSection = styled.section`
  min-height: 100vh;
  height: auto;
  padding: 0 0 100px 0;
  margin-bottom: 100px;
`;

const Box = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
`;
export default Events;
