import React, { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Segment } from 'semantic-ui-react';
import { FormContainer, FormHeader1, FormStyle, FormInput } from '../styledComponents/FormStyles';
import { SubmitButton } from '../styledComponents/ButtonStyles';

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
        <FormHeader1> Login </FormHeader1>
        <FormStyle onSubmit={this.handleSubmit}>
          <FormInput
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
          <FormInput
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <SubmitButton>Submit</SubmitButton>
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
