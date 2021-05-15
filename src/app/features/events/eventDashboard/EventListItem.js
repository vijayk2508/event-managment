/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

function EventListItem(props) {
  console.log('props.event', props.event)
  const { attendees, hostedBy, hostPhotoURL, id, title, date, category, description, venue } =
    props.event /*
   {
    id: '1',
    title: 'Trip to Empire State building',
    date: '2018-03-21',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'NY, USA',
    venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
    ],
  },
  */
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
          <Button color='teal' floated='right' content='View'></Button>
        </Segment>
      </Segment.Group>
    </>
  )
}

export default EventListItem
