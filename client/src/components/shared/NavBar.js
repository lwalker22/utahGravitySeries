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
        <LinkStyle to="/profile" >
          Profile
          <br></br>
        </LinkStyle>
        <button
          onClick={() => handleLogout(this.props.history)} > Logout
        </button>
      </>
    );
    } else {
      return (
        <>
          <LinkStyle to="/login" >
            Login
          </LinkStyle>
          <LinkStyle to="/register" >
            Register
          </LinkStyle>
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

const NavContainer = styled.body`
  background: black;
  boader: 2px solid black;
  overflow: hidden;
  padding: 1em;
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
  padding: .5em;
  color: white;
  font-family: marker felt;
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
  font-family: marker felt;
`;

const LogoImage = styled.img`
  margin: .25em;
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