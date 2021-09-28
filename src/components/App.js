import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import './App.css'
import SidePane from './SidePane/SidePane'
import firebase from '../firebase'

import { connect } from 'react-redux'
import { clearUser, setUser } from '../redux/users/useActions'
export class App extends Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.clearUser()
      })
  }
  render() {
    return (
      <Grid stretched style={{ background: '#eee' }} stackable>
        <Grid.Column width="5">
          <SidePane onSignOut={this.handleSignOut}></SidePane>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = ({ users: { loading } }) => ({})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
