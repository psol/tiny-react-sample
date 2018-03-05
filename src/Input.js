import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Change } from './actions'

function Input (props) {
  return <form>
      <span>First, last name:</span>
      <input value={props.first}
        onChange={(e) => props.dispatch(Change('first', e.target.value))} />
      <input value={props.last}
        onChange={(e) => props.dispatch(Change('last', e.target.value))}/>
    </form>
}

Input.propTypes = {
  'first': PropTypes.string.isRequired,
  'last': PropTypes.string.isRequired
}

export default connect(state => state)(Input)