import React, {Fragment} from 'react';
import styled from 'styled-components';
import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
import moment from 'moment';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      'https://blog.aragon.one/ghost/api/v0.1/posts?limit=2&client_id=ghost-frontend&client_secret=b3cf42f3e06a'
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          items: json.posts,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container id="blog">
        <h6>
          <span className="grey">—</span> OUR LAST POSTS
        </h6>
        <PostContainer>
          {this.state.items.map(item => (
            <Post key={item.id} target="_blank" href={'https://blog.aragon.one' + item.url}>
              <Image src={'https://blog.aragon.one/' + item.feature_image} />
              <Info>
                <h6>{moment(item.created_at).format("MMM Do, YYYY")}</h6>
                <p>{item.meta_title}</p>
              </Info>
            </Post>
          ))}
        </PostContainer>
        <MoreBtn target="_blank" href="http://blog.aragon.one">View more posts</MoreBtn>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 20px auto;
  width: 80%;
  padding-bottom: 40px;
`;
const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -20px;
`
const MoreBtn = styled.a`
  border: solid 1px #FF7671;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  width: 300px;
  display: inherit;
  padding: 15px;
  cursor: pointer;
  margin: 20px auto 0 auto;
  text-decoration: none!important;
  color: white!important;

  &:hover {
  background: #FF7671;
  }
`
const Post = styled.a`
  margin: 20px;
  width: calc(100% - 40px);
  ${medium('width: calc(40vw - 20px);')};

  background: #191919;
  text-decoration: none!important;
  color: white!important;
`;
const Info = styled.div`
  padding: 30px;
  p {
    font-family: 'FontRegular';
    line-height: 1.7;
    font-size: 2rem;
    height: 95.56px;
    overflow: hidden;
    margin-bottom: 0;
  }
  h6 {
    font-family: 'FontRegular';
    line-height: 9.28;
    font-size: 1rem;
    letter-spacing: 2.6px;
    color: #FF7671;
    text-transform: uppercase;
    margin: 0 0 10px 0!important;
  }
`;
const Image = styled.img`
  height: auto;
  width: 100%;
  ${medium('height: calc(20vw - 20px); object-fit: cover;')};
`;

export default Posts;
