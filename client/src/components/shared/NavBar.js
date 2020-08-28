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
          </LinkStyle>
          <Menu.Item
            name="logout"
            onClick={ () => handleLogout(this.props.history) }
            />
        </>
      );
    } else {
      return (
        <>
          <LinkStyle to="/register" >
            Register
          </LinkStyle>
          <LinkStyle to="/login" >
            Login
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
          {this.rightNavItems()}
        </LeftLayout>
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
  background: black;
  border-radius: none;
  border: 3px solid black;
`;

const LeftLayout = styled.div`
  padding: .5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  margin: .5em;
  color: white;
  font-family: marker felt;
`;


// const Navbar = () => (
//   <NavContainer>
//     <LeftLayout>
//     <div>
//     <Link to ='/'>
//       <img src={logo} alt='logo' style={{ width: "auto", height: "3em"}} />
//     </Link>
//     </div>
//     <div>
//       <Link to ='/about' style={{ textDecoration: 'none', margin: "1em", color: "white", fontFamily: "marker felt" }}>
//         About
//       </Link>
//     </div>
//     <div>
//     <Link to ='/venues' style={{ textDecoration: 'none', margin: ".5em", color: "white", fontFamily: "marker felt" }}>
//       Venues
//     </Link>
//     </div>
//     </LeftLayout>
//   </NavContainer>
// )

// const NavContainer = styled.div`
//   background: black;
//   border-radius: none;
//   border: 3px solid black;
//   color: white;
// `;

// const LeftLayout = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   align-items: center;
// `;


// export default Navbar;