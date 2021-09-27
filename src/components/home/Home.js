import React, { Component } from 'react'
import { DateInput } from 'semantic-ui-calendar-react'
import { Button, Divider, Grid, Header, Icon, Menu, Segment } from 'semantic-ui-react'

class home extends Component {
  state = {
    date: ''
  }
  handleWorkDateChange = (event, { name, value }) => {}
  render() {
    return (
      <Grid stretched style={{ background: '#eee' }} stackable>
        <Grid.Column width="5">
          <Segment>
            <Header>
              <Icon name="tasks"></Icon>
              <Header.Content>WorkList</Header.Content>
            </Header>
            <Divider></Divider>

            <Menu vertical style={{ width: '100%' }}>
              <Menu.Item name="user">
                <Icon name="user"></Icon> User
              </Menu.Item>
              <Menu.Item name="key">
                <Icon name="key"></Icon> Change Password
              </Menu.Item>
              <Menu.Item name="signout">
                <Icon name="sign out alternate"></Icon> Sign out
              </Menu.Item>
            </Menu>
            <Divider></Divider>

            <DateInput
              name="date"
              inline
              placeholder="Date"
              value={this.state.date}
              onChange={this.handleWorkDateChange}
            ></DateInput>
          </Segment>
        </Grid.Column>
        <Grid.Column width="11">
          <Grid>
            <Grid.Column width="16">
              <Grid.Row>
                <Segment clearing>
                  <Header>
                    <Icon name="calendar"></Icon>
                    <Header.Content>
                      <h1>Date: 27/09/2021</h1>
                    </Header.Content>
                  </Header>
                  <Button icon="plus" floated="right"></Button>
                </Segment>
              </Grid.Row>
              <Divider></Divider>
              <Grid.Row>
                <Grid>
                  <Grid.Column width="8">
                    <Segment stacked>
                      <Header>
                        <Icon name="bell" color="orange"></Icon>
                        <Header.Content>To Do</Header.Content>
                      </Header>
                      <Divider></Divider>
                      <Segment attached clearing>
                        Ten cong viec
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>

                      <Segment attached clearing>
                        Ten cong viec
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                    </Segment>
                  </Grid.Column>

                  <Grid.Column width="8">
                    <Segment stacked>
                      <Header>
                        <Icon name="calendar check outline" color="green"></Icon>
                        <Header.Content>Done</Header.Content>
                      </Header>
                      <Divider></Divider>
                      <Segment attached clearing>
                        Ten cong viec
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>

                      <Segment attached clearing>
                        Ten cong viec
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
}

export default home
