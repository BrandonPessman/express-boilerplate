const express = require('express')
const router = express.Router()

const testController = require('../controllers/test')

router.get('/', (req, res) => {
    res.status(200).send({status: testController.test()})
})

module.exports = router