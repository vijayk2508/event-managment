import React from 'react'
import LazyLoader from './LazyLoader'

function LoadRoute(props) {
  console.log('LoadRoute', LoadRoute)
  return (
    <LazyLoader
      componentPath={props.routeComponentPath}
      componentParent={props.routeComponentParent}
      fallback={'Loading...'}
      {...props}
    />
  )
}

export default LoadRoute
