import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './app/layout/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
const rootElement = document.getElementById('root')

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  )
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function () {
    setTimeout(render)
  })
}

render()

reportWebVitals()
