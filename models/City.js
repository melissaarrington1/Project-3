const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const CitySchema = new Schema ({
    name: String,
    state: String,
    attractions: String,
    currentTemp: Number
})

module.exports = mongoose.model('City', City)