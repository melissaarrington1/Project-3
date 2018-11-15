const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const WeatherSchema = new Schema ({
    typeOfWeather: String,
    date: Date.now
})

module.exports = mongoose.model('Weather', Weather)