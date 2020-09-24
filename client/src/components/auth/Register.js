import React, { Component } from 'react';
import { AuthConsumer, } from '../../providers/AuthProvider';
import { Segment } from 'semantic-ui-react';
import { FormContainer, FormHeader1, FormStyle, FormInput } from '../styledComponents/FormStyles';
import { SubmitButton } from '../styledComponents/ButtonStyles';


class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', name: '' };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, name } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, name }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, name } = this.state;
    
    return (
      <FormContainer>
        <FormHeader1> Register </FormHeader1>
        <FormStyle onSubmit={this.handleSubmit}>
        <FormInput
            label="Name"
            required
            autoFocus
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <br></br>
          <br></br>
          <FormInput
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
          <FormInput
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
          <SubmitButton> Submit </SubmitButton>
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