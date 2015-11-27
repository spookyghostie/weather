import React from 'react'
import { findDOMNode } from 'react-dom'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import SelectBox from '../SelectBox.jsx'
import sinon from 'sinon'

describe('Select Box', () => {
  it('renders without problems', () => {
    const cityList = ['New York', 'Atlanta', 'Chicago', 'Los Angeles']
    const selectBox = TestUtils.renderIntoDocument(<SelectBox
                                                      cityList={cityList}
                                                      handleChange={ sinon.stub() } />)
    expect(selectBox).toExist();
  });
  it('calls this.props.handleChange when selected option changes', () => {
    const cityList = ['New York', 'Atlanta', 'Chicago', 'Los Angeles']
    const newValue = 'Atlanta'
    const spy = sinon.spy()
    const selectBox = TestUtils.renderIntoDocument(<SelectBox
                                                      cityList={cityList}
                                                      handleChange={spy} />)
    TestUtils.Simulate.change(findDOMNode(selectBox).querySelector('select'), {target : {value : newValue}})
    findDOMNode(selectBox).value = newValue
    expect(spy.called).toEqual(true)
  });
});