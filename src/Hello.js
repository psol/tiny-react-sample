import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Hello(props) {
  return <div>Hello {props.first} {props.last}!</div>
}

Hello.propTypes = {
  'first': PropTypes.string.isRequired,
  'last': PropTypes.string.isRequired
}

export default connect(state => state.person)(Hello)