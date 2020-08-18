import React, { Component, Fragment } from 'react';
import { Form } from 'semantic-ui-react';

class VenueForm extends Component {
  state = { name: '', address: '', date: ''}

  componentDidMount () {
    if (this.props.venue) {
      const { name, address, date } = this.props
      this.setState({ name, address, date })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: [value] })
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
    this.setState({ name: '', address: '', date: ''})
  }

  render() {
    const { name, address, date } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Venue Name'
          required
        />
        <Form.Input
          name='address'
          value={address}
          onChange={this.handleChange}
          label='Address'
          required
        />
        <Form.Input
          name='date'
          value={date}
          onChange={this.handleChange}
          label='Date'
          required
        />
        <Form.Button>Submit</Form.Button>
      </form>
    );
  }
}

export default VenueForm;


