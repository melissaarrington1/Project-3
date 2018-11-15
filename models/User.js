const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String
})
module.exports = mongoose.model('User', User)