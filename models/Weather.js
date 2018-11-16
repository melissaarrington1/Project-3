const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Weather = new Schema ({
    typeOfWeather: String,
    // date: Date.now
})

module.exports = mongoose.model('Weather', Weather)