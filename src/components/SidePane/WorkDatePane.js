import React, { Component } from 'react'
import { DateInput } from 'semantic-ui-calendar-react'

class WorkDatePane extends Component {
  state = {
    date: ''
  }
  handleWorkDateChange = (event, { name, value }) => {}
  render() {
    return (
      <DateInput
        name="date"
        inline
        placeholder="Date"
        value={this.state.date}
        onChange={this.handleWorkDateChange}
      ></DateInput>
    )
  }
}

export default WorkDatePane
