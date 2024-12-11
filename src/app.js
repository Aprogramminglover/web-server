const path = require('path')
const express = require('express')
const hbs = require('hbs')
const location = require('../utils/location')
const weather = require('../utils/weather')


const app = express()
const rootPathDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')



app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(rootPathDirectory))

app.get('', (req, res) => {
    res.render('index', {
        name: 'Santosh Veerabathini',
        age: 27
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Santosh Veerabathini',
        age: 27
    });
})

// app.get('/help', (req, res) => {
//     res.send('help page');
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>ABOUUTTTTTT</h1>');
// })

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send('You must provide an address!')
    }

    location(req.query.address, (error, { longitude, latitude, address } = {}) => {
        // console.log(longitude, latitude);
        // console.log(address);
        if (error) {
            console.log('this is running');
            // return console.log(error);
            return res.send(error)
        }
        weather(longitude, latitude, (error, temperature) => {
            if (error) {
                // return console.log(error);
                // return res.render('weather', { address: error })
                return res.send(error)
            }
            res.send({
                address, temperature
            })
            // res.render('weather', { address: data[0].properties.full_address, temperature })
            // console.log(data[0].properties.full_address);
            // console.log(temperature);
        })
    })

    // res.render('weather', { address: req.query.address });
})

app.get('*', (req, res) => {
    res.render('404', {
        error: '404!!!!!'
    })
})

app.listen(3000, () => {
    console.log('server started on port 3000.');
})