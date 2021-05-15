import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import routeLinkList from '../constants/routeLinkList'
import { cookies } from '../constants/general'

const PrivateRoute = ({ render: Component, ...rest }) => {
  function Admin(resProps) {
    return (
      <Suspense fallback={'Loading...'}>
        <Component {...resProps} />
      </Suspense>
    )
  }

  return (
    <Route
      {...rest}
      render={props =>
        cookies.get('api_token') ? (
          <Admin {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: routeLinkList.Home,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
