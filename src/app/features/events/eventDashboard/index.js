import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'

export default function EventDashboard(props) {
  const { events } = useSelector(state => state.eventReducer)
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} {...props}></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        <h1></h1>
        {/* {formOpen && (
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
        )} */}
      </Grid.Column>
    </Grid>
  )
}
