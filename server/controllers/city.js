var Promise = require("bluebird");
const weather = require('../lib/weather')
const cityList = ["New York", "Chicago", "Seattle", "Houston", "San Diego"]

function formatWeatherData (result) {
  const weatherObj = JSON.parse(result.weatherData)
  const forecastObj = JSON.parse(result.forecastData)
  return {
    dt: weatherObj.dt,
    name: weatherObj.name,
    temp: weatherObj.main.temp,
    humidity: weatherObj.main.humidity,
    pressure: weatherObj.main.pressure,
    daily_min: forecastObj.list[0].temp.min,
    daily_max: forecastObj.list[0].temp.max
  }
}

function formatForecastData (result) {
  const forecastObj = JSON.parse(result.forecastData)
  return forecastObj.list
          .slice(0,5)
          .map(obj => ({
            temp: obj.temp.day,
            weekday: new Date(obj.dt * 1000).toString().substring(0,3)
          }))
}

module.exports = app => {
  app.get('/api/city', (req, res) => {
    const appData = {
      cityList: cityList,
      weatherData: {},
      forecastData: []
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(appData))
  })
  app.get('/api/city/:name', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Promise
      .props(weather(req.params.name))
      .then(result => {
        const appData = {
          cityList: cityList,
          weatherData: formatWeatherData(result),
          forecastData: formatForecastData(result)
        }
        res.send(JSON.stringify(appData))
      })
      .catch(err => {
        const appData = {
          cityList: cityList,
          weatherData: {},
          forecastData: [],
          error: err
        }
        res.status(err.statusCode) // forward the error to the client
        res.send(JSON.stringify(appData))
      })
  })
}