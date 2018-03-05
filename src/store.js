import { combineReducers, createStore, applyMiddleware } from 'redux'
import { CHANGE_FIELD } from './actions'
import thunk from 'redux-thunk'

function identity (state, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return Object.assign({}, state, { [action.field]: action.value })
    default:
      return state
  }
}

export function MakeStore () {
  return createStore(identity, { first: '', last: '' }, applyMiddleware(thunk))
}