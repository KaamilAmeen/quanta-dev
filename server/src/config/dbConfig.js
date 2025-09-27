const mysql  = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');

// Config dotenv to load env variable from .env file
dotenv.config({path: path.resolve(__dirname, '../../.env')});

// Create a connection pool to the DB
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

module.exports = pool.promise();