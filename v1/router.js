const router = require('express').Router()
const middleware = require('./middleware/middleware')

const TestRoutes = require('./routes/test')
router.use('/test', TestRoutes)

const TestAuthRoutes = require('./routes/testAuth')
router.use('/testAuth', middleware, TestAuthRoutes)

const AuthRoutes = require('./routes/auth')
router.use('/auth', AuthRoutes)

module.exports = router