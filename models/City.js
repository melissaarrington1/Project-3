const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const City = new Schema ({
    name: String,
    state: String,
    attractions: String,
    currentTemp: Number,
    weather:  [
    {
        type: Schema.Types.ObjectId,
        ref: 'Weather'
    }
    ]
})

module.exports = mongoose.model('City', City)