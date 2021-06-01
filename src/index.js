import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './app/layout/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './app/redux/store'

const rootElement = document.getElementById('root')

const store = configureStore()

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
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
