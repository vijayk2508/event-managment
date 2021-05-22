/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
import { routeLinkList } from '../../../../constants/routeLinkList'

export default function SignedInMenu(props) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png'></Image>
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={routeLinkList.CreateEvent} text='Create Event' icon='plus' />

          <Dropdown.Item text='My Profile' icon='user' />

          <Dropdown.Item text='Sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
