import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Movies = () => {
    return (
      <Container>
        <h4>Recommended for You</h4>
        <Content>
          <Wrap>
            <Link to=
            '/details'><img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRe3CQjjorczicX6nq39gbSL4At1MaFloX0M-Yzm6YCPGMdPQco"
              alt="nont"
            /></Link>
          </Wrap>
          <Wrap>
          <img
              src="https://i.pinimg.com/564x/2f/ae/23/2fae232a4172ae8dd4ba7c4a8937bd0f.jpg"
              alt="none"
            />
          </Wrap>
          <Wrap>
          <img
              src="https://ntvb.tmsimg.com/assets/p17644454_v_h8_ad.jpg?w=1280&h=720"
              alt="none"
            />
          </Wrap>
          <Wrap>
 
          <img
              src="https://sportshub.cbsistatic.com/i/2022/08/22/466e5e6b-1600-4b7a-a687-6b18e07bed1b/spider-man-no-way-home-rerelease.jpg"
              alt="none"
            />

          </Wrap>
        </Content>
      </Container>
    );
}
  
             

export default Movies

const Container = styled.div`

`


const Content = styled.div`
display:grid;
grid-gap:20px;
grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
cursor:pointer;
border-radius:10px;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img {
    width:100%;
    height:100%;
    object-fit:cover;
 
   
}
&:hover {
    transform: scale(1.05);
    border:3px solid rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
`