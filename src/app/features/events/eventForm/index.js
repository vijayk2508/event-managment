import cuid from 'cuid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { params, routeLinkList } from '../../../../constants/routeLinkList'
import { createEvent, updateEvent } from '../../../redux/action-reducers/event/event.action'

let formFieldData = [
  { type: 'text', placeholder: 'Event title', name: 'title' },
  { type: 'text', placeholder: 'Category', name: 'category' },
  { type: 'text', placeholder: 'Description', name: 'description' },
  { type: 'text', placeholder: 'City', name: 'city' },
  { type: 'text', placeholder: 'Venue', name: 'venue' },
  { type: 'date', placeholder: 'Date', name: 'date' },
]

function EventForm() {
  const paramsData = useParams()
  const eventId = paramsData[params.EventId]
  let { events } = useSelector(state => state.eventReducer)
  const selectedEvent = events?.find(objEvent => objEvent?.id === eventId)
  const dispatch = useDispatch()
  const history = useHistory()
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
          onClick={e => {
            e.preventDefault()
            dispatch(
              selectedEvent
                ? updateEvent({ ...eventDetails })
                : createEvent({ ...eventDetails, id: cuid() })
            )
            history.push(routeLinkList.Events)
          }}
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

export default EventForm
