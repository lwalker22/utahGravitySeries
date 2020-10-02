import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import logo from '../logos/sprocket.jpg';
import styled from 'styled-components';


class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location,
    } = this.props;


  if (user) {
    return (
      <>
        <LinkStyle2 to="/profile" >
          Profile
          <br></br>
        </LinkStyle2>
        <button
          onClick={() => handleLogout(this.props.history)} > Logout
        </button>
      </>
    );
    } else {
      return (
        <>
          <LinkStyle2 to="/login" >
            Login
          </LinkStyle2>
          <LinkStyle2 to="/register" >
            Register
          </LinkStyle2>
        </>
      );
    }
  };

  render() {
    return (
      <NavContainer>
        <LeftLayout>
          <Link to ='/'>
            <LogoImage src={logo} alt='home logo' />
          </Link>
          <LinkStyle to ='/about' >
            About
          </LinkStyle>
          <LinkStyle to ='/venues' >
            Venues
          </LinkStyle>
          <LinkStyle to ='/results' >
            Results
          </LinkStyle>
        </LeftLayout>
        <RightLayout>
          {this.rightNavItems()}
        </RightLayout>
      </NavContainer>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);

const NavContainer = styled.div`
  background-image: linear-gradient(to right, black, black, grey, white);
  overflow: hidden;
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width; 0px;
  border-style: solid;
  border-color: white;
`;

const LeftLayout = styled.div`
  display: inline-block;
  float: left;
  display: flex;
  align-items: center;
  padding: .5em;
`;

const RightLayout = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  padding: .75em;
  color: white;
  font-family: 'Inter', serif;
  @media screen and (min-width: 320px) {
    font-size: .8em;
  }
  @media screen and (min-width: 360px) {
    font-size: 1em;
  }
  @media screen and (min-width: 579px) {
    font-size: 1.25em;
  }
`;


const LinkStyle2 = styled(Link)`
  text-decoration: none;
  padding: .75em;
  color: black;
  font-family: 'Inter', serif;
  @media screen and (min-width: 320px) {
    font-size: .8em;
  }
  @media screen and (min-width: 360px) {
    font-size: 1em;
  }
  @media screen and (min-width: 579px) {
    font-size: 1.25em;
  }
`;

const Div = styled.div`
  text-decoration: none;
  margin: 1em;
  color: white;
  font-family: 'Inter', serif;
  `;

const LogoImage = styled.img`
  padding: .75em;
  @media screen and (min-width: 320px) {
    width: auto;
    height: 2em;
  }
  @media screen and (min-width: 360px) {
    width: auto;
    height: 2.5em;
  }
  @media screen and (min-width: 579px) {
    width: auto;
    height: 4.5em;
  }

`;

// if (user) {
//   return (
//     <>
//       <LinkStyle to="/profile" >
//         Profile
//         <br></br>
//       </LinkStyle>
//       <div
//         onClick={() => handleLogout(this.props.history)} >
//       </div>
//     </>
//   );

// const NavContainer = styled.div`
//   background-image: linear-gradient(to right, black, white);
//   overflow: hidden;
//   max-width: 250px;
//   padding: 1rem;
//   color: white;
//   border-width: 3px;
//   border-style: solid;
//   border-image: 
//     linear-gradient(
//       to bottom, 
//       red, 
//       rgba(0, 0, 0, 0)
//     ) 1 100%;
// `;