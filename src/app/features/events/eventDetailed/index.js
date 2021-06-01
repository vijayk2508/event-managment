import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Grid } from 'semantic-ui-react'
import { params, routeLinkList } from '../../../../constants/routeLinkList'
import EventDetailedChat from './eventDetailedChat'
import EventDetailedHeader from './eventDetailedHeader'
import EventDetailedInfo from './eventDetailedInfo'
import EventDetailedSidebar from './eventDetailedSidebar'

function EventDetail() {
  const paramsData = useParams()
  const eventId = paramsData[params.EventId]
  let { events } = useSelector(state => state.eventReducer)
  const event = events.find(objEvent => objEvent.id === eventId)
  const history = useHistory()
  console.log('eventDetail', event)

  useEffect(() => {
    if (!eventId) {
      history.push(routeLinkList.Events)
    }
  }, [eventId, history])

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default EventDetail
