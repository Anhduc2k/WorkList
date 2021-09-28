import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import App from './components/App'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import reportWebVitals from './reportWebVitals'
import 'semantic-ui-css/semantic.min.css'
import { connect, Provider } from 'react-redux'
import store from './redux/store'
import firebase from './firebase'
import { clearUser, setUser } from './redux/users/useActions'
import Spinner from './components/UI/Spinner'
class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/')
        this.props.setUser(user)
      } else {
        this.props.history.push('/login')
        this.props.clearUser()
      }
    })
  }
  render() {
    const { loading } = this.props
    return (
      <Fragment>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </Switch>
        )}
      </Fragment>
    )
  }
}
const mapStateToProps = ({ users: { loading } }) => ({
  loading: loading
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser())
})
const RootWithAuth = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootWithAuth />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
