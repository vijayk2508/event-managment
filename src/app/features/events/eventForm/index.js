import { Formik, Form } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'
import { params, routeLinkList } from '../../../../constants/routeLinkList'
import * as Yup from 'yup'
import TextInputBox from '../../../common/form/TextInputBox'
import TextAreaBox from '../../../common/form/TextAreaBox'
import { categoryData } from '../../../api/sampleData'
import SelectInputBox from '../../../common/form/SelectInputBox'
import { createEvent, updateEvent } from '../../../redux/action-reducers/event/event.action'
import cuid from 'cuid'
import DateInputBox from '../../../common/form/DateInputBox'

const FIELDTYPE = {
  HEADER: 'header',
  INPUT: 'input',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  DATE: 'date',
}

let formFieldData = [
  { fieldType: FIELDTYPE.HEADER, content: 'Event Details', sub: true, color: 'teal', index: 1 },
  { fieldType: FIELDTYPE.INPUT, type: 'text', placeholder: 'Event title', name: 'title', index: 2 },
  {
    fieldType: FIELDTYPE.SELECT,
    placeholder: 'Event Category',
    name: 'category',
    options: categoryData,
    index: 3,
  },
  { fieldType: FIELDTYPE.TEXTAREA, placeholder: 'Description', name: 'description', index: 4 },
  {
    fieldType: FIELDTYPE.HEADER,
    content: 'Event Location Details',
    sub: true,
    color: 'teal',
    index: 5,
  },
  { fieldType: FIELDTYPE.INPUT, type: 'text', placeholder: 'City', name: 'city', index: 6 },
  { fieldType: FIELDTYPE.INPUT, type: 'text', placeholder: 'Venue', name: 'venue', index: 7 },
  {
    fieldType: FIELDTYPE.DATE,
    placeholder: 'Date',
    name: 'date',
    index: 8,
    timeFormat: 'HH:mm',
    showTimeSelect: true,
    timeCaption: 'time',
    dateFormat: 'MMMM d, yyyy h:mm a',
  },
]

const validationSchema = Yup.object({
  title: Yup.string().required('You must provide a title'),
  category: Yup.string().required('You must provide a category'),
  description: Yup.string().required(''),
  city: Yup.string().required('You must provide a city'),
  venue: Yup.string().required('You must provide a venue'),
  date: Yup.string().required('You must provide a date'),
})

function EventForm() {
  const paramsData = useParams()
  const eventId = paramsData[params.EventId]
  let { events } = useSelector(state => state.eventReducer)
  const selectedEvent = events?.find(objEvent => objEvent?.id === eventId)
  const dispatch = useDispatch()
  const history = useHistory()
  const initialStateValues = selectedEvent ?? {
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
  console.log('formFieldData', formFieldData)
  return (
    <Segment clearing>
      <Formik
        initialValues={initialStateValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          dispatch(
            selectedEvent
              ? updateEvent({ ...selectedEvent, ...values })
              : createEvent({ ...values, id: cuid() })
          )
          history.push(routeLinkList.Events)
          setSubmitting(false)
        }}
        enableReinitialize
      >
        <Form className='ui form'>
          {formFieldData.map(item => {
            let type = item.fieldType

            let data = {
              ...item,
            }
            delete data.fieldType
            switch (type) {
              case FIELDTYPE.HEADER:
                return <Header {...data} key={data.index}></Header>
              case FIELDTYPE.TEXTAREA:
                return <TextAreaBox idx={data.index} key={data.index} {...data} />
              case FIELDTYPE.SELECT:
                return <SelectInputBox idx={data.index} key={data.index} {...data} />
              case FIELDTYPE.DATE:
                return <DateInputBox idx={data.index} key={data.index} {...data} />
              case FIELDTYPE.INPUT:
              default:
                return <TextInputBox idx={data.index} key={data.index} {...data} />
            }
          })}
          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            type='submit'
            floated='right'
            content='Cancel'
            as={Link}
            to={routeLinkList.Events}
          />
        </Form>
      </Formik>
    </Segment>
  )
}

export default EventForm
