import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import './Login.css'
import firebase from '../../firebase'

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    errors: []
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  isFormValid = () => {
    if (!(this.state.email && this.state.password)) {
      const error = { message: 'Email or pass word incorrect' }
      this.setState({ errors: [error] })
      return false
    }
    return true
  }

  // hien thi tat ca loi hien co o trong mang error truyen vao
  displayErrors = errors => errors.map((error, index) => <p key={index}>{error.message}</p>)

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : ''
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: false })

      const { email, password } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(signedInUser => {
          this.setState({ Loading: false })
          this.props.history.push('/')
        })
        .catch(error => {
          this.setState({ errors: [error], Loading: false })
        })
    }
  }
  render() {
    const { email, password, loading, errors } = this.state
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="blue">
            <Icon name="code branch" color="blue"></Icon>
            Login to WorkList
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email address ..."
                type="email"
                value={email}
                onChange={this.handleChange}
                className={this.handleInputError(errors, 'email')}
              ></Form.Input>
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password ..."
                type="password"
                value={password}
                onChange={this.handleChange}
                className={this.handleInputError(errors, 'password')}
              ></Form.Input>
              <Button className={loading ? 'loading' : ''} color="blue" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}

          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login
