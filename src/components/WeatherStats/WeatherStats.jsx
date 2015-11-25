import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import styles from './WeatherStats.scss'

export default class WeatherStats extends Component {
  constructor(props) {
    super(props)
  }

  renderWeatherDetails() {
    if (Object.keys(this.props.weatherData).length > 0) {
      const cityData = this.props.weatherData
      const date = new Date(cityData.dt * 1000).toDateString()
      return (
        <div>
          <h2 className={styles.city_name}>{cityData.name}</h2>
          <div className={classnames(styles.date, styles.data_row)}>{date}</div>
          <div className={styles.data_row}>
            <label className={styles.data_row_label}>Current Temp.</label>
            {cityData.temp} &deg;F
          </div>
          <div className={styles.data_row}>
            <label className={styles.data_row_label}>High Temp.</label>
            {cityData.daily_max} &deg;F
          </div>
          <div className={styles.data_row}>
            <label className={styles.data_row_label}>Low Temp.</label>
            {cityData.daily_min} &deg;F
          </div>
          <div className={styles.data_row}>
            <label className={styles.data_row_label}>Humidity</label>
            {cityData.humidity} %
          </div>
          <div className={styles.data_row}>
            <label className={styles.data_row_label}>Pressure</label>
            {cityData.pressure} hPa
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={styles.weather_view}>
        {this.renderWeatherDetails()}
      </div>
    )
  }
}

WeatherStats.propTypes = {
  weatherData: PropTypes.object.isRequired
}
