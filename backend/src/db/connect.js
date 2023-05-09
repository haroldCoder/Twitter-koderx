const mysql = require("mysql2");
const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
  } = require("./credentials");

const db = mysql.createConnection({
    port: DB_PORT,
    "host": DB_HOST,
    "database": DB_NAME,
    "password": DB_PASSWORD,
    "user": DB_USER,
})

db.connect((err)=>{
    if(err) throw err;
    console.log('db connect');
})

module.exports = db;