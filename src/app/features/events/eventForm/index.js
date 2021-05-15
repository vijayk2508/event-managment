import cuid from 'cuid'
import React, { useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

let formFieldData = [
  { type: 'text', placeholder: 'Event title', name: 'title' },
  { type: 'text', placeholder: 'Category', name: 'category' },
  { type: 'text', placeholder: 'Description', name: 'description' },
  { type: 'text', placeholder: 'City', name: 'city' },
  { type: 'text', placeholder: 'Venue', name: 'venue' },
  { type: 'date', placeholder: 'Date', name: 'date' },
]

let initialState = {
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
}
function EventForm(props) {
  const { setformOpen, handleCreateEvent } = props
  const [eventDetails, seteventDetails] = useState(initialState)

  const handleChange = e => {
    e.preventDefault()
    seteventDetails({ ...eventDetails, [e.target.name]: e.target.value })
  }

  return (
    <Segment clearing>
      <Header>Create new event</Header>
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
          onClick={e => {
            e.preventDefault()
            handleCreateEvent({ ...eventDetails, id: cuid() })
          }}
        />
        <Button
          type='submit'
          floated='right'
          content='Cancel'
          onClick={e => {
            e.preventDefault()
            setformOpen(false)
            seteventDetails(initialState)
          }}
        />
      </Form>
    </Segment>
  )
}

export default EventForm
