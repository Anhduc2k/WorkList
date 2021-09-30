import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Divider, Header, Icon, Segment } from 'semantic-ui-react'

class DonePane extends Component {
  render() {
    return (
      <Segment stacked>
        <Header>
          <Icon name="calendar check outline" color="green"></Icon>
          <Header.Content>Done</Header.Content>
        </Header>
        <Divider></Divider>
        <Segment attached clearing>
          Ten cong viec
          <Button icon="trash alternate" inverted color="red" floated="right" size="tiny"></Button>
          <Button icon="checkmark" inverted color="blue" floated="right" size="tiny"></Button>
        </Segment>

        <Segment attached clearing>
          Ten cong viec
          <Button icon="trash alternate" inverted color="red" floated="right" size="tiny"></Button>
          <Button icon="checkmark" inverted color="blue" floated="right" size="tiny"></Button>
        </Segment>
      </Segment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DonePane)
