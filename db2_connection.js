const mysql = require('mysql');

const db2 = mysql.createConnection({
    host: process.env.DBUA2_HOST,
    user: process.env.DBUA2_USER,
    password: process.env.DBUA2_PASSWORD,
    database: process.env.DBUA2_DATABASE,
    multipleStatements: true
});

db2.connect();

const query = 'SELECT * FROM ages';
setInterval(() => {
    db2.query(query, (err, results) => {
        if (err) throw err;
    });
}, 30000);

module.exports = db2;