import { TEST } from './test1.constant'

const initialState = {
  data: 42,
}

export default function test1Reducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return state
    default:
      return state
  }
}
