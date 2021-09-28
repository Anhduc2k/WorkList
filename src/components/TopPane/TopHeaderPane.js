import React, { Component, Fragment } from 'react'
import { Button, Form, FormField, Header, Icon, Input, Modal, Segment } from 'semantic-ui-react'

class TopHeaderPane extends Component {
  state = {
    modal: false,
    workName: ''
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmit = event => {}
  closeModal = () => {
    this.setState({ modal: false })
  }
  openModal = () => {
    this.setState({ modal: true })
  }
  render() {
    const { modal } = this.state
    return (
      <Fragment>
        <Segment clearing>
          <Header>
            <Icon name="calendar"></Icon>
            <Header.Content>
              {''}
              <h1>Date: 27/09/2021</h1>
              {''}
            </Header.Content>
          </Header>
          <Button icon="plus" floated="right" onClick={this.openModal}></Button>
        </Segment>

        <Modal basic open={modal} onCLose={this.closeModal}>
          <Modal.Header style={{ color: '#FF4500' }}>Add a work you need to do</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <FormField>
                <Input
                  fluid
                  label="Work name:"
                  name="workName"
                  onChange={this.handleChange}
                ></Input>
              </FormField>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark"></Icon> Add
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove"></Icon> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    )
  }
}

export default TopHeaderPane
