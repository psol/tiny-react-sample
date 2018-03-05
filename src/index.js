import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { MakeStore } from './store'
import Input from './Input'
import Hello from './Hello'

render(<Provider store={MakeStore()}>
    <div>
      <Input />
      <Hello />
    </div>
  </Provider>,
  document.getElementById('root'))