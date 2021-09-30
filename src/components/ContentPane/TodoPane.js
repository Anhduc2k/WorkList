import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Divider, Header, Icon, Segment } from 'semantic-ui-react'
import { refreshWorkDateDataId } from '../../redux/workdates/workDateActions'

class TodoPane extends Component {
  handleDeleteWork = work => {}
  handleUpdateStatus = work => {}
  render() {
    const { toDoWorks } = this.props
    return (
      <Segment stacked>
        <Header>
          <Icon name="bell" color="orange"></Icon>
          <Header.Content>To Do</Header.Content>
        </Header>
        <Divider></Divider>
        {toDoWorks &&
          toDoWorks.length > 0 &&
          toDoWorks.map(item => (
            <Segment attached clearing>
              {item.name}
              <Button
                icon="trash alternate"
                inverted
                color="red"
                floated="right"
                size="tiny"
                onClick={() => this.handleDeleteWork(item)}
              ></Button>
              <Button
                icon="checkmark"
                inverted
                color="blue"
                floated="right"
                size="tiny"
                onClick={() => this.handleUpdateStatus(item)}
              ></Button>
            </Segment>
          ))}
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  refreshWorkDateDataId: id => dispatch(refreshWorkDateDataId(id))
})

export default connect(null, mapDispatchToProps)(TodoPane)
