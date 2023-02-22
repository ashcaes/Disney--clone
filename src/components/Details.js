import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <Container>
      <Background>
        <img src="/images/sparrow.jpg" alt="none" />
      </Background>
      <ImageTitle>
        <img src="/images/pngwing.com.png" alt="none" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="none" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-White.png" alt="none" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="none" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>
      2011 ‧ Action/Adventure ‧ 2h 21m
      </Subtitle>
      <Description>
      Jack Sparrow and Barbossa embark on a quest to find the elusive
      <br/>
      fountain of youth, only to discover that Blackbeard and his daughter are after it too.
      </Description>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
 
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
  
  img {
    padding-top: 50px;
    width: 100%;
    height: fit-content;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
margin-top:20px;
  width: 300px;
  height: 140px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
 
  }
`;

const Controls = styled.div`
display: flex ;
align-items:center;

`;




const PlayButton = styled.button`
padding: 0px 24px ;
margin-right: 22px ;
border-radius: 4px ;
font-size:15px ;
display: flex ;
align-items: center ;
height: 56px ;
background-color: rgb(249,249,249) ;
border: none ;
letter-spacing:1.8px;
cursor:pointer;

&:hover {
  background-color:rgb(198,198,198);
}

`;

const TrailerButton = styled(PlayButton)`

background: rgba(0,0,0,0.3);
border: 1px solid rgb(249 ,249,249) ;
color: rgb(249 ,249,249) ;
`;

const AddButton = styled.button`
margin-right: 16px ;
width: 44px ;
height: 44px ;
border-radius: 50% ;
display: flex ;
align-items: center ;
justify-content: center ;
border: 2px solid white ;
background-color: rgba(0,0,0,0.6) ;
cursor: pointer ;

span {
  font-size: 26px ; 
  color: white ;
}
`;

const GroupWatchButton = styled(AddButton)`
background-color: rgb(0,0,0)
`;

const Subtitle =styled.div`
color:rgb(249,249,249);
font-size: 15px ;
min-height: 20px ;
margin-top: 26px ;
`

const Description =styled.div`
line-height: 1.4 ;
margin-top: 16px ;
color: color:rgb(249,249,249) ;
`