const CHANGE_FIELD = 'CHANGE_FIELD'

export function Change (field, value) {
  return {
    type: CHANGE_FIELD,
    field,
    value
  }
}

export function reducer (state, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return { person: {...state.person, [action.field]: action.value } }
    default:
      return state
  }
}