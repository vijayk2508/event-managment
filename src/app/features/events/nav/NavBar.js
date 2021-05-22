/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import { routeLinkList } from '../../../../constants/routeLinkList'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

export default function NavBar(props) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to={routeLinkList.Home} header>
          <img src='/assets/logo.png' style={{ marginRight: 15 }} />
          Re-events
        </Menu.Item>
        <Menu.Item as={NavLink} to={routeLinkList.Events} name='Events'></Menu.Item>
        <Menu.Item as={NavLink} to={routeLinkList.CreateEvent}>
          <Button positive inverted content='Create Event'></Button>
        </Menu.Item>
        <SignedOutMenu></SignedOutMenu>
        <SignedInMenu></SignedInMenu>
      </Container>
    </Menu>
  )
}
