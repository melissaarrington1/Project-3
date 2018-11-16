const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
// const cityController = require('../controllers/cityController')

router.get('/users', userController.index)
// router.post('/users/', userController.create)


module.exports = router