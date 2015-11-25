import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import SelectBox from '../SelectBox.jsx'

describe('Select Box', () => {
  it('renders without problems', () => {
    const cityList = ['New York', 'Atlanta', 'Chicago', 'Los Angeles']
    const selectBox = TestUtils.renderIntoDocument(<SelectBox cityList={cityList} />);
    expect(selectBox).toExist();
  });
});