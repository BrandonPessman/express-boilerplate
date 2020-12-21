// Setting up Express App
const express = require('express');
const app = express()

// Setting up CORS 
const cors = require('cors')
app.use(cors())

// Setting up Body-Parser in order to read JSON objects
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// Setting up Morgan for endpoint Logging
var morgan = require('morgan')
app.use(morgan('tiny'))

// Setting up Enviornment Variables
require('dotenv').config()
const PORT = process.env.PORT

// Setting up MySQL
const mysql = require('./v1/helpers/mysql')
mysql.connectToServer();

// Setting up Rate limiting
if (process.env.RATE_LIMIT == "true") {
    const rateLimit = require('express-rate-limit')
    const limiter = rateLimit({
        windowMs: 5 * 60 * 1000, // 5 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    })
    app.use(limiter)
    console.log("Rate Limit: Enabled")
} else {
    console.log("Rate Limit: Disabled")
}

// Version 1 API Routes
const router = require('./v1/router')
app.use('/api/v1', router)

// Openning up Server
app.listen(PORT, () => {
	console.log('Backend: Online [Port: ' + PORT + ']');
});
