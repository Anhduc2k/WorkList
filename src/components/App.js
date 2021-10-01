import React, { Component } from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import './App.css'
import SidePane from './SidePane/SidePane'
import firebase from '../firebase'

import { connect } from 'react-redux'
import { clearUser, setUser } from '../redux/users/useActions'
import TopHeaderPane from './TopPane/TopHeaderPane'
import ContentPane from './ContentPane/ContentPane'
import EmptyContenMessage from './ContentPane/EmptyContenMessage'
export class App extends Component {
  // fn logout
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.clearUser()
      })
  }
  render() {
    const { workDate, workDateData, refreshWorkDateDataId } = this.props
    return (
      <Grid stretched style={{ background: '#eee' }} stackable>
        <Grid.Column width="5">
          <SidePane onSignOut={this.handleSignOut}></SidePane>
        </Grid.Column>
        <Grid.Column width="11">
          <Grid.Column>
            <Grid.Column width="16">
              <Grid.Row>
                <TopHeaderPane></TopHeaderPane>
              </Grid.Row>
              <Divider></Divider>
              <Grid.Row>
                {this.props.workDateData ? (
                  <ContentPane
                    key={`${workDateData.id}${refreshWorkDateDataId}`}
                    workDateId={workDateData.id}
                  ></ContentPane>
                ) : (
                  <EmptyContenMessage
                    key={workDate}
                    workDate={this.props.workDate}
                  ></EmptyContenMessage>
                )}
              </Grid.Row>
            </Grid.Column>
          </Grid.Column>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = ({
  users: { loading },
  workDates: { workDate, workDateData, refreshWorkDateDataId }
}) => ({
  workDate: workDate,
  workDateData, // enhaned object : workDateData: workDateData
  refreshWorkDateDataId
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
