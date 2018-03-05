import React from 'react'
import { render } from 'react-dom'
import MakeStore from './store'
import IdentityForm from './IdentityForm'

const store = MakeStore()

function App (props) {
  return <IdentityForm store={store}/>
}

render(<App />, document.getElementById('root'));
