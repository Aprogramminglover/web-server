const request = require('request')

const location = (placeName, callback) => {
    console.log(callback);
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(placeName) + '&access_token=pk.eyJ1IjoiYXByb2dyYW1taW5nbG92ZXIiLCJhIjoiY20ydWZrdnZqMDBzbjJrcXZpaXc5d3d0cCJ9.P7WjZDWDYqvN7K24rzDaBA&limit=1'
    request({ url: url, json: true }, (error, response) => {
        // console.log(response.body.error);
        console.log(response.body);
        if (error) {
            callback('service not available', undefined)
        } else if (response.body.error) {
            console.log('response.body.error ran');
            callback('wrong location', undefined)
        } else {
            // console.log('from location.js', response.body.features[0].properties.coordinates);
            callback(undefined, { longitude: response.body.features[0].properties.coordinates.longitude, latitude: response.body.features[0].properties.coordinates.latitude, address: response.body.features[0].properties.full_address }) //.properties) //.coordinates.longitude)
        }
    })


}

module.exports = location