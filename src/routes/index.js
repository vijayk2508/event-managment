import React from 'react'
import { Switch } from 'react-router-dom'
import routerList from './routerList'
import CommonRoute from './CommonRoute'
import PrivateRoute from './PrivateRoute'
import LoadRoute from './LoadRoute'
import Layout from '../app/layout'

function Routes(props) {
  console.log('Routes', props)
  return (
    <Switch>
      {Object.keys(routerList).map(routeKey => {
        return !routerList[routeKey].isAuthenticated ? (
          <CommonRoute
            key={routeKey}
            render={LoadRoute}
            importPath={routerList[routeKey].path}
            {...routerList[routeKey]}
            {...props}
          />
        ) : (
          <PrivateRoute
            key={routeKey}
            render={LoadRoute}
            importPath={routerList[routeKey].path}
            {...routerList[routeKey]}
          />
        )
      })}
    </Switch>
  )
}

export default Routes
