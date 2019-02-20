import React from 'react'
import {shallow} from 'enzyme'
import IdentityForm from '../IdentityForm'

test('withWidth(<IdentityForm />)', () => {
    const component = shallow(<IdentityForm />)

    expect(component).toMatchSnapshot()
})
