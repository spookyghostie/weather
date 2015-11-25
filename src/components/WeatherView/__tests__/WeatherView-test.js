import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import WeatherView from '../WeatherView.jsx'

describe('Weather View', () => {
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
    const forecastData = [{temp: 23, weekday: 'Mon'}, {temp: 34, weekday: 'Tue'}, {temp: 30, weekday: 'Wed'}]
    const weatherView =
      TestUtils.renderIntoDocument(<WeatherView weatherData={weatherData} forecastData={forecastData} />);
    expect(weatherView).toExist();
  });
});