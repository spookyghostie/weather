const Url = require('url')

const BASE_URL = 'api.openweathermap.org/data/2.5/'
const API_KEY = '88dac50463663c4febccae27e7e9cfb9'

module.exports = (endpoint, query) => {
  var urlObj = Url.parse('http://' + BASE_URL + endpoint)
  urlObj.search = null
  urlObj.query = {
    q: query,
    APPID: API_KEY,
    units: 'imperial'
  }
  return Url.format(urlObj)
}