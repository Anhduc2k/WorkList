import React, { Component, Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
import DonePane from './DonePane'
import TodoPane from './TodoPane'
import firebase from '../../firebase'
import Spinner from '../UI/Spinner'
class ContentPane extends Component {
  state = {
    worksRef: firebase.database().ref('works'),
    workDateId: this.props.workDateId,
    toDoWorks: [],
    loading: true,
    doneWorks: []
  }
  //cho phep se lang nghe them cac su kien de lay du lieu tu workDateId
  componentDidMount() {
    const { workDateId } = this.state
    if (workDateId) this.addListener(workDateId)
  }
  //goi khi thanh phan huy nap
  componentWillUnmount() {
    this.removeListeners()
  }
  //lang nghe cac su kien
  addListener = workDateId => {
    let toDoWorks = []
    let doneWorks = []
    const { worksRef } = this.state
    worksRef.child(workDateId).on('child_added', snap => {
      this.retrieveWorks(snap.val(), snap.key, toDoWorks, doneWorks)
    })
  }
  retrieveWorks = (work, key, toDoWorks, doneWorks) => {
    if (work.status === 'To do') {
      toDoWorks.push({ id: key, ...work })
    } else {
      doneWorks.push({ id: key, ...work })
    }
    this.setState({
      toDoWorks,
      doneWorks,
      loading: false
    })
  }
  // loai bo su kien dang duoc lang nghe
  removeListeners = () => {
    this.state.worksRef.off()
  }
  render() {
    const { loading, workDateId, toDoWorks, doneWorks } = this.state
    return (
      <Fragment>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Grid>
            <Grid.Column width="8">
              <TodoPane
                key={`t${toDoWorks.length}`}
                toDoWorks={toDoWorks}
                workDateId={workDateId}
              ></TodoPane>
            </Grid.Column>

            <Grid.Column width="8">
              <DonePane
                key={`t${toDoWorks.length}`}
                doneWorks={doneWorks}
                workDateId={workDateId}
              ></DonePane>
            </Grid.Column>
          </Grid>
        )}
      </Fragment>
    )
  }
}

export default ContentPane
