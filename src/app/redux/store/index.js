import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { rootReducers } from '../action-reducers/rootReducer'

export function configureStore() {
  return createStore(rootReducers, devToolsEnhancer())
}
