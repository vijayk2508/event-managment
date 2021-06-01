import { combineReducers } from 'redux'
import eventReducer from './event/event.reducer'

export const rootReducers = combineReducers({ eventReducer })
