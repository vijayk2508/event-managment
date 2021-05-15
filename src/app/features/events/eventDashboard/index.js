import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../eventForm'
import EventList from './EventList'

export default function EventDashboard(props) {
  const { formOpen, setformOpen } = props
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  function handleCreateEvent(event) {
    setEvents([...events, event])
  }
  function handleUpdateEvent(updatedEvent) {
    let tmpEvent = [...events]
    let findByIdx = tmpEvent.findIndex(evt => evt.id === updatedEvent.id)
    if (findByIdx !== -1) {
      tmpEvent[findByIdx] = updatedEvent
    }
    setEvents(tmpEvent)
    setSelectedEvent(null)
    setformOpen(false)
  }

  function handleDeleteEvent(eventId) {
    let tmpEvent = [...events]
    let findByIdx = tmpEvent.findIndex(evt => evt.id === eventId)
    if (findByIdx !== -1) {
      tmpEvent.splice(findByIdx, 1)
    }
    setEvents(tmpEvent)
    setSelectedEvent(null)
    setformOpen(false)
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          handleDeleteEvent={handleDeleteEvent}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          {...props}
        ></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            handleCreateEvent={handleCreateEvent}
            handleUpdateEvent={handleUpdateEvent}
            handleDeleteEvent={handleDeleteEvent}
            setEvents={setEvents}
            events={events}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
            {...props}
          ></EventForm>
        )}
      </Grid.Column>
    </Grid>
  )
}
