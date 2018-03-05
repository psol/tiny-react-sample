import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './store'
import Input from './Input'
import Hello from './Hello'

const store = createStore(reducer, { person: { first: '', last: '' } }, applyMiddleware(thunk))

render(<Provider store={store}>
    <div>
      <Input />
      <Hello />
    </div>
  </Provider>,
  document.getElementById('root'))