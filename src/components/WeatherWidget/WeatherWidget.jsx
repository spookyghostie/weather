import React, { Component, PropTypes } from 'react'

import SelectBox from '../SelectBox/SelectBox.jsx'
import WeatherView from '../WeatherView/WeatherView.jsx'

import styles from './WeatherWidget.scss'

export default class WeatherWidget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.widget}>
        <SelectBox
          cityList={this.props.cityList}
          handleChange={this.props.handleSelectChange} />
        <WeatherView
          weatherData={this.props.weatherData}
          forecastData={this.props.forecastData} />
      </div>
    )
  }
}

WeatherWidget.propTypes = {
  cityList: PropTypes.array.isRequired,
  weatherData: PropTypes.object.isRequired,
  forecastData: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired
}