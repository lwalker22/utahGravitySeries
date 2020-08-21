import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ResultsForm extends Component {
  state = { year: '' }

  componentDidMount() {
    if (this.props.id) {
      const { year } = this.props
      this.setState({ year })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateResult, resultId, id, history } = this.props
      updateResult(resultId, id, this.state, history)
    } else {
      this.props.addResult(this.props.resultId, this.state)
    }
    this.setState({ year: '' })
  }

  render() {
    const { year } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='year'
          value={year}
          onChange={this.handleSubmit}
          required
          label='Year'
        />
        <button>Submit</button>
      </Form>
    )
  }
}

export default ResultForm;