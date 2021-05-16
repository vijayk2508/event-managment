import React from 'react'
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react'
import routeLinkList from '../../../constants/routeLinkList'

function Home({ history }) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image style={{ marginBottom: 12 }} size='massive' src='/assets/logo.png'></Image>
          Re-vents
        </Header>
        <Button size='huge' inverted onClick={() => history.push(routeLinkList.Events)}>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Segment>
  )
}

export default Home
