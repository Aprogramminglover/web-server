const request = require('request')

const weather = (longitude, latitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=b9b6809c85909b41184a7597cff59add&query=' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
        // console.log(url);
        if (error) {
            callback("net off", undefined)
        } else if (response.body.error) {
            callback("wrong lat, lon", undefined)
        } else {
            callback(undefined, response.body.current.temperature)
        }
    })

}



module.exports = weather
