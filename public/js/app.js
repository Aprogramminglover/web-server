console.log('Client side javascript file is loaded!')
// fetch('https://api.mapbox.com/search/geocode/v6/forward?q=Bhiwandi&access_token=pk.eyJ1IjoiYXByb2dyYW1taW5nbG92ZXIiLCJhIjoiY20ydWZrdnZqMDBzbjJrcXZpaXc5d3d0cCJ9.P7WjZDWDYqvN7K24rzDaBA&limit=1').then((response) => {
//     response.json().then((data) => {
//         // console.log(data.features[0].properties.coordinates.longitude);
//         fetch('https://api.weatherstack.com/current?access_key=b9b6809c85909b41184a7597cff59add&query=' + data.features[0].properties.coordinates.latitude + ',' + data.features[0].properties.coordinates.longitude).then((response) => {
//             response.json().then((data1) => {
//                 console.log(data1.current.temperature);
//                 console.log(data.features[0].properties.full_address);
//             })
//         })
//     })
// })



const submit = document.querySelector('form')
const inputGiven = document.querySelector('input')
const pp = document.querySelector('#message-1')
const pp1 = document.querySelector('#message-2')
// console.log("submit ", submit);
submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log();
    if (!inputGiven.value) {
        pp.textContent = 'Please enter location'
    } else {
        fetch('http://localhost:3000/weather?address=' + inputGiven.value).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    // console.log(data);
                    pp.textContent = data.address
                    pp1.textContent = data.temperature
                }

            })
        })
    }

})

// const 