const request = require('request')


const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ee01ed6949227c431b062927e2eade97&query=' + longitude + ',' + latitude + '&units=f'

  request({url, json: true}, (err, {body}) =>{
    if(err){
      callback('Unable to connect to weather service.', undefined)
    } else if (body.error) {
      callback('Umable to find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip * 100 + ' percent chance of rain.')
    }
  })
}

module.exports = forecast
