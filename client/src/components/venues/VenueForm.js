import React, { Component, Fragment } from 'react';
import { FormContainer, FormHeader1, FormStyle, FormInput } from '../styledComponents/FormStyles';
import { SubmitButton } from '../styledComponents/CommonStyles';


class VenueForm extends Component {
  state = { name: '', address: '', date: ''}

  componentDidMount () {
    if (this.props.id) {
      const { name, address, date } = this.props
      this.setState({ name, address, date })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { id, history } = this.props
      this.props.updateVenue(id, this.state, history)
      this.props.toggleUpdate()
    } else {
      this.props.addVenue(this.state)
    }
    this.setState({ name: '', address: '', date: '' })
  }

  render() {
    const { name, address, date } = this.state
    return(
      <FormContainer>
        <FormHeader1> Venue </FormHeader1>
          <FormStyle onSubmit={this.handleSubmit}>
            <FormInput
              placeholder="Name"
              name='name'
              value={name}
              onChange={this.handleChange}
              required
              />
            <FormInput
              placeholder="Location"
              name='address'
              value={address}
              onChange={this.handleChange}
              required
              />
            <FormInput
              name='date'
              value={date}
              onChange={this.handleChange}
              required
              placeholder='Date'
              />
              <br></br>
            <SubmitButton>Submit</SubmitButton>
          </FormStyle>
        </FormContainer>
    );
  }
}


export default VenueForm;


