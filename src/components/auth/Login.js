import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import './Login.css'
class Login extends Component {
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="blue">
            <Icon name="code branch" color="blue"></Icon>
            Login to WorkList
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email address ..."
                type="email"
              ></Form.Input>
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password ..."
                type="password"
              ></Form.Input>
              <Button color="blue" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>

          <Message error>
            <h3>Error</h3>
            Email or Password incorrect !
          </Message>

          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login
