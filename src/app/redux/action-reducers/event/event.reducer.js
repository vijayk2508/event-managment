import { eventData } from '../../../api/sampleData'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './event.constant'

const initialState = {
  events: eventData ?? [],
}

export default function eventReducer(state = initialState, { type, payload }) {
  let tmpData = [...state?.events]
  let findIndex = -1
  switch (type) {
    case CREATE_EVENT:
      tmpData = [...tmpData, payload]
      return { ...state, events: tmpData }
    case DELETE_EVENT:
      findIndex = tmpData.findIndex(evt => evt.id === payload)
      if (findIndex > -1) {
        tmpData.splice(findIndex, 1)
      }
      return { ...state, events: tmpData }
    case UPDATE_EVENT:
      findIndex = tmpData.findIndex(event => event.id === payload.id)
      if (findIndex > -1) {
        tmpData[findIndex] = payload
      }
      return { ...state, events: tmpData }
    default:
      return state
  }
}
