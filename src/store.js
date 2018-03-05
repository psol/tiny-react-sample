import { combineReducers, createStore, applyMiddleware } from 'redux'
import { UPDATE_IDENTITY_FIELD } from './actions'
import thunk from 'redux-thunk'

function identity (state = { first: '', last: '' }, action) {
  switch (action.type) {
    case UPDATE_IDENTITY_FIELD:
      if(action.field) {
        return Object.assign({}, state, {[action.field]: action.value)        
      }
      else ; // falls to default
    default:
      return state
  }
}

const reducers = combineReducers({
  identity: () => identity
})

export function MakeStore () {
  return createStore(reducers, { identity: {} }, applyMiddleware(think))
}