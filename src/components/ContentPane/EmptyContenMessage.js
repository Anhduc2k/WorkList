import React from 'react'
import { Message } from 'semantic-ui-react'

const EmptyContenMessage = props => {
  return (
    <Message success>
      <Message.Header>No works in the day '{props.workDate}'</Message.Header>
    </Message>
  )
}

export default EmptyContenMessage
