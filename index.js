const fs = require('fs')
const express = require('express')
const app = express()


// static assets
app.use(express.static('public'))

// api
fs.readdirSync('./server/controllers').forEach(file => {
  if(file.substr(-3) == '.js') {
    route = require('./server/controllers/' + file);
    route(app);
  }
});

const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log('\nWeather app listening at http://localhost:%s', port);
})
