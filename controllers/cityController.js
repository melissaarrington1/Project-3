const City = require('../models/City')

index: (req, res) => {
    City.find({})
        .then((cities) => {
            res.send(cities)
        })
    }

module.exports = cityController
