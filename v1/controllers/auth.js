const token = require('../helpers/generateToken')

module.exports = {
    login: (req, res) => {
        res.status(200).send({token: token.generateToken("1", "1", "1")})
    }
}