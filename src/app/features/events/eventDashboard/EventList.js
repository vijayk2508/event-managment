import React from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import EventListItem from './EventListItem'

function EventList(props) {
  const { events } = props
  return events.length > 0
    ? events.map((event, idx) => <EventListItem event={event} key={event.id}></EventListItem>)
    : 'Please Add Event.'
}

export default EventList
