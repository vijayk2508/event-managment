/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

function EventListItem(props) {
  const { attendees, hostedBy, hostPhotoURL, title, date, category, description, venue } =
    props.event
  const { setformOpen, setSelectedEvent, handleDeleteEvent } = props
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size='tiny'
                circular
                src={hostPhotoURL ? hostPhotoURL : '/assets/user.png'}
              ></Item.Image>
              <Item.Content>
                <Item.Header content={title}></Item.Header>
                <Item.Description>{hostedBy}</Item.Description>
                <Item.Content>{category}</Item.Content>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {date}
            <Icon name='marker' /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {attendees.length > 0
              ? attendees.map((attendee, idx) => (
                  <EventListAttendee attendee={attendee} key={idx} />
                ))
              : []}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button
            color='red'
            floated='right'
            content='Delete'
            onClick={e => {
              e.preventDefault()
              handleDeleteEvent(props.event.id)
            }}
          ></Button>
          <Button
            color='teal'
            floated='right'
            content='View'
            onClick={e => {
              e.preventDefault()
              setSelectedEvent(props.event)
              setformOpen(true)
            }}
          ></Button>
        </Segment>
      </Segment.Group>
    </>
  )
}

export default EventListItem
