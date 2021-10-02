import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormField, Header, Icon, Input, Modal, Segment } from 'semantic-ui-react'
import {
  refreshWorkDateDataId,
  setWorkDate,
  setWorkDateData
} from '../../redux/workdates/workDateActions'
import firebase from '../../firebase'
class TopHeaderPane extends Component {
  state = {
    modal: false,
    workName: '',
    workDatesRef: firebase.database().ref('workdates'),
    worksRef: firebase.database().ref('works')
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmit = event => {
    const { workName, worksRef } = this.state
    if (this.props.workDateData) {
      this.saveWork(this.props.workDateData.id, workName, worksRef)
    } else {
      this.saveWorkDate()
    }
  }

  saveWorkDate() {
    if (this.isFormValid(this.state)) {
      const { workDatesRef, workName, worksRef } = this.state
      const { user, workDate } = this.props
      const key = workDatesRef.push().key
      const newWorkDate = {
        id: key,
        date: workDate,
        uid: user.uid
      }
      workDatesRef
        .child(key)
        .update(newWorkDate)
        .then(() => {
          this.saveWork(key, workName, worksRef)
        })
        .catch(err => {})
    }
  }

  // luu cong viec duoc nhap vao o trong ngay`
  saveWork = (key, workName, worksRef) => {
    const newWork = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      name: workName,
      status: 'To do'
    }
    worksRef
      .child(key)
      .push()
      .set(newWork)
      .then(() => {
        this.closeModal()
        this.props.refreshWorkDateDataId(Math.random())
      })
      .catch(err => {})
  }
  isFormValid = ({ workName }) => workName
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
const mapStateToProps = ({ workDates: { workDate, workDateData }, users: { user } }) => ({
  workDate: workDate,
  workDateData: workDateData,
  user: user
})

const mapDispatchToProps = dispatch => ({
  setWorkDate: workDate => dispatch(setWorkDate(workDate)),
  setWorkDateData: data => dispatch(setWorkDateData(data)),
  refreshWorkDateDataId: id => dispatch(refreshWorkDateDataId(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderPane)
