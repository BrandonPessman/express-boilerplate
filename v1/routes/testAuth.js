const express = require('express')
const router = express.Router()

const testAuthController = require('../controllers/testAuth')

router.get('/', (req, res) => {
    res.status(200).send({status: testAuthController.test()})
})

module.exports = router