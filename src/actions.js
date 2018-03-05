export const CHANGE_FIELD = 'CHANGE_FIELD'

export function Change (field, value) {
  return {
    type: CHANGE_FIELD,
    field,
    value
  }
}