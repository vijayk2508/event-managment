import cuid from 'cuid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { routeLinkList } from '../../../../constants/routeLinkList'

let formFieldData = [
  { type: 'text', placeholder: 'Event title', name: 'title' },
  { type: 'text', placeholder: 'Category', name: 'category' },
  { type: 'text', placeholder: 'Description', name: 'description' },
  { type: 'text', placeholder: 'City', name: 'city' },
  { type: 'text', placeholder: 'Venue', name: 'venue' },
  { type: 'date', placeholder: 'Date', name: 'date' },
]

function EventForm(props) {
  console.log('hi')
  const { selectedEvent } = props
  const initialState = selectedEvent ?? {
    title: '',
    date: '',
    category: '',
    description: '',
    city: '',
    venue: '',
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
  }
  const [eventDetails, seteventDetails] = useState(initialState)

  const handleChange = e => {
    e.preventDefault()
    seteventDetails({ ...eventDetails, [e.target.name]: e.target.value })
  }

  return (
    <Segment clearing>
      <Header>{`${selectedEvent ? 'Edit' : 'Create'} New Event`}</Header>
      <Form>
        {formFieldData.map((item, idx) => {
          return (
            <Form.Field key={idx}>
              <input
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                value={eventDetails[item.name]}
                onChange={handleChange}
              />
            </Form.Field>
          )
        })}
        <Button
          type='submit'
          floated='right'
          positive
          content='Submit'
          // onClick={e => {
          //   e.preventDefault()
          //   if (selectedEvent) {
          //     handleUpdateEvent({ ...eventDetails })
          //   } else {
          //     handleCreateEvent({ ...eventDetails, id: cuid() })
          //   }
          //   seteventDetails(initialState)
          //   setformOpen(false)
          // }}
        />
        <Button
          type='submit'
          floated='right'
          content='Cancel'
          as={Link}
          to={routeLinkList.Events}
        />
      </Form>
    </Segment>
  )
}

EventForm.defaultProps = {
  setformOpen: () => {},
  handleCreateEvent: () => {},
  selectedEvent: null,
  handleUpdateEvent: () => {},
}

export default EventForm
