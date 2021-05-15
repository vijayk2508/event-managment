/*
  Use this component to lazily load any other component
  Props:
    1. componentParent: oneOf(["containers", "components", "UIComponents", "common"])
    2. componentPath: String
    3. fallback: Component/HTML
*/

import React, { Suspense, lazy, memo } from 'react'
import { string, oneOfType, element, node, oneOf } from 'prop-types'

function lazyLoadComponent(componentParent, componentPath) {
  console.log('lazyLoadComponent', componentParent, componentPath)
  let Component
  switch (componentParent) {
    case 'pages':
      Component = lazy(() => import(`../app/${componentPath}`))
      break
    default:
      throw new Error(
        alert(
          componentParent,
          componentPath
        )`Component Parents can be only one of ["pages"] but you provided ${componentParent} instead.`
      )
  }

  return Component
}

// Don't re-lazyload the component after it is already loaded
// Component reloads because fallback gives a new HTMLElement instance everytime
function arePropsEqual() {
  return true
}

function LazyLoader({ componentPath, fallback, componentParent, ...restProps }) {
  const ComponentToRender = lazyLoadComponent(componentParent, componentPath)

  return (
    <Suspense fallback={<>{fallback}</>}>
      <ComponentToRender {...restProps} />
    </Suspense>
  )
}

LazyLoader.defaultProps = {
  componentParent: 'pages',
  fallback: 'Loading...',
}

LazyLoader.propTypes = {
  componentParent: oneOf(['pages']),
  componentPath: string.isRequired,
  fallback: oneOfType([node, element]),
}

export default memo(LazyLoader, arePropsEqual)
