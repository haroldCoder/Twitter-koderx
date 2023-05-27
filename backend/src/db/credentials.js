const DB_HOST = process.env.DB_HOST || 'containers-us-west-10.railway.app'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'LYxJYRUVXMHfZjvyFDcW'
const DB_NAME = process.env.DB_NAME || 'railway'
const DB_PORT = process.env.DB_PORT || 5934
const PORT = process.env.PORT || 5000

module.exports = {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    PORT
  }