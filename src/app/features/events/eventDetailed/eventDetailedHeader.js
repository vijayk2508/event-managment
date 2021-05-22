import React, { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react'
import { params, routeLinkList } from '../../../../constants/routeLinkList'

const eventImageStyle = {
  filter: 'brightness(30%)',
}

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white',
}

function EventDetailedHeader() {
  const paramsData = useParams()
  const eventId = paramsData[params.EventId]
  const history = useHistory()
  useEffect(() => {
    if (!eventId) {
      history.push(routeLinkList.Events)
    }
    // return () => {}
  }, [eventId])
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image src={`/assets/categoryImages/drinks.jpg`} fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header size='huge' content='Event Title' style={{ color: 'white' }} />
                <p>Event Date</p>
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom'>
        <Button>Cancel My Place</Button>
        <Button color='teal'>JOIN THIS EVENT</Button>

        <Button as={Link} to={`${routeLinkList.Manage}/${eventId}`} color='orange' floated='right'>
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  )
}

export default EventDetailedHeader
