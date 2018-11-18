const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
// const cityController = require('../controllers/cityController')

router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)



module.exports = router