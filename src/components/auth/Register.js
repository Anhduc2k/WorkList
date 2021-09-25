import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
export class Register extends Component {
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange">
            <Icon name="registered" color="orange"></Icon>
            Register for WorkList
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                type="username"
              ></Form.Input>
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
              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Confirm password"
                type="password"
              ></Form.Input>
              <Button color="orange" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          <Message error>
            <h3>Error</h3>
            Password incorrect!
          </Message>
          <Message>
            You already have an account? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Register
