import { Route } from 'react-router'
import { Container } from 'semantic-ui-react'
import './App.css'

import { params, routeLinkList } from '../../constants/routeLinkList'
import EventDashboard from '../features/events/eventDashboard'
import EventDetail from '../features/events/eventDetailed'
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
              <Route
                path={`${routeLinkList.Events}/:${params.EventId}`}
                component={EventDetail}
                exact
              ></Route>
              <Route
                path={[routeLinkList.CreateEvent, `${routeLinkList.Manage}/:${params.EventId}`]}
                component={EventForm}
                //exact
              ></Route>
            </Container>
          </>
        )}
      ></Route>
    </>
  )
}

export default App
