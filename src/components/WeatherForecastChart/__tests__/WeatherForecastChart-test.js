import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import WeatherForecastChart from '../WeatherForecastChart.jsx'

describe('Weather Forecast Chart', () => {
  it('renders without problems', () => {
    const data = [{temp: 23, weekday: 'Mon'}, {temp: 34, weekday: 'Tue'}, {temp: 30, weekday: 'Wed'}]
    const weatherForecastChart = TestUtils.renderIntoDocument(<WeatherForecastChart data={data} />);
    expect(weatherForecastChart).toExist();
  });
});