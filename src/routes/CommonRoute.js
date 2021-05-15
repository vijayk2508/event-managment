/*
    Redirect to /home if logged in otherwise open the given route
*/

import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import routeLinkList from '../constants/routeLinkList'
import { cookies } from '../constants/general'
import Layout from '../app/layout'

const CommonRoute = ({ render: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        cookies.get('api_token') ? (
          <Redirect to={routeLinkList.MyProfile} />
        ) : (
          <Suspense fallback={'Loading...'}>
            <Component {...props} {...rest} />
          </Suspense>
        )
      }
    />
  )
}

export default CommonRoute
