const User = require('../models/User')
// const City = require('../models/City')

const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
        }
    }


module.exports = userController
