
import styled from "styled-components";


const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      <NavMenu>
        <a href="demi">
            <img src="/images/home-icon.svg" alt="none"/>
            <span>HOME</span>
        </a>
        <a href="demi">
            <img src="/images/search-icon.svg" alt="none"/>
            <span>SEARCH</span>
        </a>
        <a href="demi">
            <img src="/images/watchlist-icon.svg" alt="none"/>
            <span>WATCHLIST</span>
        </a>
        <a href="demi">
            <img src="/images/original-icon.svg" alt="none"/>
            <span>ORIGINALS</span>
        </a>
        <a href="demi">
            <img src="/images/movie-icon.svg" alt="none"/>
            <span>MOVIES</span>
        </a>
        <a href="demi">
            <img src="/images/series-icon.svg" alt="none"/>
            <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="/images/naruto.jpg"/>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display:flex;
  align-items:center;
  padding:0 36px;
  justify-content:space-between;
`;

const Logo = styled.img`
width:80px;
`

const NavMenu = styled.div`
display:flex;
align-items:center;

a {
  display:flex;
  align-items:center;
  padding:0 12px;
  
  img {
     height:22px;
     padding-bottom:1.2px;
    }

    span {
      font-size:13px;
      letter-spacing:1.42px;
      position:relative;

      &:after{
      content:'';
      height:2px;
      background:white;
      position:absolute;
      
      left:0;
      right:0;
      bottom:-6px;
      opacity:0;
      transform: scaleX(0);
      
      transition:all 220ms cubic-bezier(0.25,0.46,0.45,0.49) 0s;

      }
    }

    &:hover{

      span:after {
        transform:scaleX(1);
        opacity:1;
      }
    }
}

`

const UserImage = styled.img`
width:50px;
height:50px;
border-radius:50%;
cursor:pointer;
` 