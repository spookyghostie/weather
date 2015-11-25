import React, { Component, PropTypes } from 'react'

import WeatherStats from '../WeatherStats/WeatherStats.jsx'
import WeatherForecast from '../WeatherForecast/WeatherForecast.jsx'

import styles from './WeatherView.scss'

export default class WeatherView extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={styles.weather_view}>
        <div className={styles.current_weather_panel}>
          <WeatherStats weatherData={this.props.weatherData} />
        </div>
        <div className={styles.forecast_panel}>
          <WeatherForecast forecastData={this.props.forecastData} />
        </div>
      </div>
    )
  }
}

WeatherView.propTypes = {
  weatherData: PropTypes.object.isRequired,
  forecastData: PropTypes.array.isRequired
}