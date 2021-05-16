import { Route } from 'react-router'
import { Container } from 'semantic-ui-react'
import './App.css'

import routeLinkList from '../../constants/routeLinkList'
import EventDashboard from '../features/events/eventDashboard'
import EventDetail from '../features/events/eventDetail'
import EventForm from '../features/events/eventForm'
import NavBar from '../features/events/nav/NavBar'
import Home from '../features/home'

function App() {
  return (
    <>
      <Route path={routeLinkList.Home} component={Home} exact></Route>
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar></NavBar>
            <Container className='main'>
              <Route path={routeLinkList.Events} component={EventDashboard} exact></Route>
              <Route path={`${routeLinkList.Events}/:id`} component={EventDetail} exact></Route>
              <Route path={routeLinkList.CreateEvent} component={EventForm} exact></Route>
            </Container>
          </>
        )}
      ></Route>
    </>
  )
}

export default App
