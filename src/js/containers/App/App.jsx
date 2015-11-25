import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchData } from '../../actions/ApiActions'
import WeatherWidget from '../../../components/WeatherWidget/WeatherWidget.jsx'

import "../../../scss/app.scss"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  render() {
    const props = this.props
    const { dispatch, cityList, weatherData, forecastData } = this.props
    return (
      <div>
        <WeatherWidget
          cityList={cityList}
          weatherData={weatherData}
          forecastData={forecastData}
          handleSelectChange={url => dispatch(fetchData(url))} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cityList, selectedCity, weatherData, forecastData } = state
  return {
    cityList: cityList,
    weatherData: weatherData,
    forecastData: forecastData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ApiActions, dispatch)
  }
}

export default connect(mapStateToProps)(App)