const User = require('../models/User')
// const City = require('../models/City')

const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
        },
    create: (req, res) => {
        User.create(req.body)
        .then((user) => {
            res.send(user)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('favCity')
        .then((user) => {
            res.send(user)
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body)
        .then((updatedUser) => {
            updatedUser.save()
            res.send(updatedUser)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })
    }
}


module.exports = userController
