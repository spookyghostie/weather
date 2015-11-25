import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import WeatherWidget from '../WeatherWidget.jsx'

describe('Weather Widget', () => {
  it('renders without problems', () => {
    const cityList = ['New York', 'Atlanta', 'Chicago', 'Los Angeles', 'Houston']
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
    const weatherView = TestUtils.renderIntoDocument(<WeatherWidget
                                                        weatherData={weatherData}
                                                        forecastData={forecastData}
                                                        cityList={cityList} />);
    expect(weatherView).toExist();
  });
});