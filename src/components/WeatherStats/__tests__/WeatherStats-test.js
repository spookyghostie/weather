import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import WeatherStats from '../WeatherStats.jsx'

describe('Weather Stats', () => {
  it('renders without problems', () => {
    const weatherData = {
      dt: 1448593923,
      name: 'Houston',
      temp: 73.55,
      humidity: 83,
      pressure: 1033.95,
      daily_min: 67.73,
      daily_max: 72.52
    }
    const weatherStats = TestUtils.renderIntoDocument(<WeatherStats weatherData={weatherData} />)
    expect(weatherStats).toExist()
  });
});