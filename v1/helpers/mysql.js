const mysql = require('mysql')

let connection;

module.exports = {
  connectToServer: function () {
    connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT
    })
    connection.connect(function (err) {
        if (err) {
          console.error('error connecting: ' + err.stack)
          return
        }
      
        console.log('MySQL: Connected')
    })
  },

  getDb: function () {
    return connection
  }
}