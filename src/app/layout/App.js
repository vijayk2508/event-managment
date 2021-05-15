import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../features/events/eventDashboard'
import NavBar from '../features/events/nav/NavBar'
import './App.css'

function App() {
  const [formOpen, setformOpen] = useState(false)
  return (
    <>
      <NavBar setformOpen={setformOpen}></NavBar>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setformOpen={setformOpen}></EventDashboard>
      </Container>
    </>
  )
}

export default App
