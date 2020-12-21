const jwt = require('jsonwebtoken')

const jwtKey = process.env.JWTKEY

const jwtExpirySeconds = 60 * 60

module.exports = {
  generateToken: (id, email, username) => {
    return jwt.sign({ id, email, username }, jwtKey, {
      algorithm: 'HS256',
      expiresIn: jwtExpirySeconds
    })
  }
}