import { combineReducers, createStore, applyMiddleware } from 'redux'
import { CHANGE_FIELD } from './actions'
import thunk from 'redux-thunk'

function person (state, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return { person: Object.assign({}, state.person, { [action.field]: action.value }) }
    default:
      return state
  }
}

export function MakeStore () {
  return createStore(person, { person: { first: '', last: '' } }, applyMiddleware(thunk))
}