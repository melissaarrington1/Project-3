const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const cityController = require('../controllers/cityController')

//Routes for User model
router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userContoller.delete)

//Routes for City Model
router.get('/api/users/city', cityController.index)

//Routes for Weather Model

module.exports = router