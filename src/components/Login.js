import React from "react";
import styled from "styled-components";


const Login = () => {



  return (
    <Container>
      <Content>
        <ContentLg src="/images/cta-logo-one.svg" />
        <SignUp href="/">GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <ContentLg src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: top;
    background-size: cover;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
    opacity: 0.8 ;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  margin-top: -30px ;
 
`;
const ContentLg = styled.img``;

const SignUp = styled.a`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 12px;
  text-align: center;
  background-color: #0063e5;
  font-weight: 600;
  padding: 17px 0;
  letter-spacing: 0.8px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    background-color: #362fd9;
  }
`;

const Description =styled.p`

font-size: 13px ;
letter-spacing: 1.5px ;
text-align: center ;
line-height: 1.5 ;
`