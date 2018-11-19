const City = require('../models/City')

const cityController = {
index: (req, res) => {
    City.find({})
        .then((cities) => {
            res.send(cities)
        })
    }
}
module.exports = cityController
