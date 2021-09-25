import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import reportWebVitals from './reportWebVitals'
import 'semantic-ui-css/semantic.min.css'

class Root extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </Fragment>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
