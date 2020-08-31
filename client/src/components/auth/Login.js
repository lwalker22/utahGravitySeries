import React, { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Segment } from 'semantic-ui-react';
import { FormContainer, FormHeader, FormStyle} from '../styledComponents/FormStyles';

class Login extends Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.handleLogin({ email, password }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <FormContainer>
        <FormHeader> Login </FormHeader>
        <FormStyle onSubmit={this.handleSubmit}>
          <input
            label="Email"
            autoFocus
            required         
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
            />
          <br></br>
          <br></br>
          <input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
            />
          <Segment textAlign='center' basic>
            <br></br>
            <button>Submit</button>
          </Segment>
        </FormStyle>
      </FormContainer>

    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
