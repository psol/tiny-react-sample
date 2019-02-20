const CHANGE_FIELD = 'CHANGE_FIELD'
const RECEIVE_RESULTS = 'RECEIVE_RESULTS'

export function Change (field, value) {
  return {
    type: CHANGE_FIELD,
    field,
    value
  }
}

function receiveResults (results) {
  return {
    type: RECEIVE_RESULTS,
    results
  }
}

export function Search () {
  return function (dispatch, getState) {
    const person = getState().person
    const query = (person.first + ' ' + person.last).trim()
    if(query.length > 0) {
      return fetch(encodeURI(`https://api.github.com/search/users?q=${query}`))
        .then(response => response.json())
        .then(json => dispatch(receiveResults(json)))
    }
    else return Promise.resolve()
  }
}

export function reducer (state, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return { person: {...state.person, [action.field]: action.value }, github: state.github }
    case RECEIVE_RESULTS:
      return { person: state.person, github: action.results.items }
    default:
      return state
  }
}