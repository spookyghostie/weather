import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import WeatherForecast from '../WeatherForecast.jsx'

describe('Weather Forecast', () => {
  it('renders without problems', () => {
    const forecastData = [{temp: 23, weekday: 'Mon'}, {temp: 34, weekday: 'Tue'}, {temp: 30, weekday: 'Wed'}]
    const weatherForecast = TestUtils.renderIntoDocument(<WeatherForecast forecastData={forecastData} />)
    expect(weatherForecast).toExist()
  });
});