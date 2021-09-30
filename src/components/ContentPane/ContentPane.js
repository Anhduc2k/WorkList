import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import DonePane from './DonePane'
import TodoPane from './TodoPane'

class ContentPane extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width="8">
          <TodoPane></TodoPane>
        </Grid.Column>

        <Grid.Column width="8">
          <DonePane></DonePane>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ContentPane
