/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOutMenu(props) {
  return (
    <Menu.Item position='right'>
      <Button positive inverted content='Login'></Button>
      <Button positive inverted content='SignUp' style={{ marginLeft: '0.5em' }}></Button>
    </Menu.Item>
  )
}
