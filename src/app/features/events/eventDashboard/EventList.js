import React from 'react'
import EventListItem from './EventListItem'

function EventList(props) {
  const { events } = props
  return events.length > 0
    ? events.map((event, idx) => <EventListItem event={event} key={event.id}></EventListItem>)
    : 'Please Add Event.'
}

export default EventList
