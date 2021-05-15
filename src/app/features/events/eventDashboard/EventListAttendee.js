import React from 'react'
import { Image, List } from 'semantic-ui-react'

function EventListAttendee(props) {
  const { id, name, photoURL } = props
  return (
    <List.Item>
      <Image size='mini' src={photoURL ? photoURL : '/assets/user.png'}></Image>
    </List.Item>
  )
}

export default EventListAttendee