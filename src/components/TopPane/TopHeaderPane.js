import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormField, Header, Icon, Input, Modal, Segment } from 'semantic-ui-react'
import { setWorkDate, setWorkDateData } from '../../redux/workdates/workDateActions'

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
    const { workDate } = this.props
    return (
      <Fragment>
        <Segment clearing>
          <Header>
            <Icon name="calendar"></Icon>
            <Header.Content>
              {''}
              <h1>Date: {workDate}</h1>
              {''}
            </Header.Content>
          </Header>
          <Button icon="plus" floated="right" onClick={this.openModal}></Button>
        </Segment>

        <Modal basic open={modal} onClose={this.closeModal}>
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

// connect redux store
const mapStateToProps = ({ workDates: { workDate } }) => ({
  workDate: workDate
})

const mapDispatchToProps = dispatch => ({
  setWorkDate: workDate => dispatch(setWorkDate(workDate)),
  setWorkDateData: data => dispatch(setWorkDateData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderPane)
