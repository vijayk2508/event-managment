import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../eventForm'
import EventList from './EventList'

export default function EventDashboard(props) {
  const { formOpen } = props
  const [events, setEvents] = useState([])

  function handleCreateEvent(event) {
    setEvents([...events, event])
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            handleCreateEvent={handleCreateEvent}
            setEvents={setEvents}
            {...props}
          ></EventForm>
        )}
      </Grid.Column>
    </Grid>
  )
}
