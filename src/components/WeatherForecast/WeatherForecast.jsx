import React, { Component, PropTypes } from 'react'

import WeatherForecastChart from '../WeatherForecastChart/WeatherForecastChart.jsx'

import styles from './WeatherForecast.scss'

export default class WeatherForecast extends Component {
  constructor(props) {
    super(props)
  }

  renderForecastData() {
    if (this.props.forecastData.length > 0) {
      return (
        <div>
          <h2 className={styles.header}>5 Day Forecast</h2>
          <WeatherForecastChart data={this.props.forecastData} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderForecastData()}
      </div>
    )
  }
}

WeatherForecast.propTypes = {
  forecastData: PropTypes.array.isRequired
}