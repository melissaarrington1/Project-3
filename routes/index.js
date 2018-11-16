const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
// const cityController = require('../controllers/cityController')

router.get('/users', userController.index)
router.post('/users/', userController.create)
router.get('/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)



module.exports = router