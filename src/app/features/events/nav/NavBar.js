import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavBar(props) {
  const { setformOpen } = props
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>Re-events</Menu.Item>
        <Menu name='Events'></Menu>
        <Menu.Item>
          <Button
            onClick={e => {
              e.preventDefault()
              setformOpen(true)
            }}
            positive
            inverted
            content='Create Event'
          ></Button>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button positive inverted content='Login'></Button>
          <Button positive inverted content='SignUp' style={{ marginLeft: '0.5em' }}></Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}
