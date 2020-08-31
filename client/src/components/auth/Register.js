import React, { Component } from 'react';
import { AuthConsumer, } from '../../providers/AuthProvider';
import { Segment } from 'semantic-ui-react';
import { FormContainer, FormHeader, FormStyle } from '../styledComponents/FormStyles';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, } = this.state;
    
    return (
      <FormContainer>
        <FormHeader> Register </FormHeader>
        <FormStyle onSubmit={this.handleSubmit}>
          <input
            label="Email"
            required
            autoFocus
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
          <br></br>
          <br></br>
          <input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <br></br>
          <br></br>
          <Segment textAlign='center' basic>
            <button> Submit </button>
          </Segment>
        </FormStyle>
      </FormContainer>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}