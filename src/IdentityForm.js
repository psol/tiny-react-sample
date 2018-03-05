import React from 'react'

export default function IdentityForm (props) {
  return <form>
      <label for='first'>First name:</label>
      <input id='first' />
      <label for='last'>Last name:</label>
      <input id='last' />
    </form>
}