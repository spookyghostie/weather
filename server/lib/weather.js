const request = require('request-promise')
const formatUrl = require('./format-url')

module.exports = query => {
  const weatherDataUrl = formatUrl('weather', query)
  const forecastDataUrl = formatUrl('forecast/daily', query)
  return {
    weatherData: request(weatherDataUrl),
    forecastData: request(forecastDataUrl)
  }
}
