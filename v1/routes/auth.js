const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.get('/', (req, res) => {
    authController.login(req, res)
})

module.exports = router