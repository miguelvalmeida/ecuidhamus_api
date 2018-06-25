const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DBUA1_HOST,
    user: process.env.DBUA1_USER,
    password: process.env.DBUA1_PASSWORD,
    database: process.env.DBUA1_DATABASE
});

db.connect();

const query = 'SELECT * FROM configs';
setInterval(() => {
    db.query(query, (err, results) => {
        if (err) throw err;
    });
}, 30000);

module.exports = db;