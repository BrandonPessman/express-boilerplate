const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWTKEY

const middleware = (req, res, next) => {
  const token = req.headers['authorization']

  // if the cookie is not set, return an unauthorized error
  if (!token) {
    return res.status(401).end()
  }

  let payload
  try {
    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // Bad Token
      return res.status(401).end()
    }
    // Error
    return res.status(400).end()
  }

  // Variables to pass back to function
  res.locals.email = payload.email
  res.locals._id = payload._id
  res.locals.username = payload.username
  next()
}

module.exports = middleware