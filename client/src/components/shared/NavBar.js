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
          <LinkStyle to="/" >
            Logout
          </LinkStyle>
        </>
      );
    } else {
      return (
        <>
          <LinkStyle to="/login" >
            Login
            <br></br>
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
            <img src={logo} alt='logo' style={{ width: "auto", height: "3em"}} />
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
`;

const LeftLayout = styled.div`
  display: inline-block;
  padding: 1em;
  float: left;
  display: flex;
  align-items: center;
`;

const RightLayout = styled.div`
  display: inline-block;
  padding: 1em;
  float: right;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  margin: .5em;
  color: white;
  font-family: marker felt;
`;
