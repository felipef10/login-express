const mysql = require('mysql2/promise');
//mysql://root:hjscctMoUgwZMQBORaCrtUawpUgbsybI@junction.proxy.rlwy.net:38366/railway
// Create the connection to database
const connection = mysql.createPool({
    host: process.env.HOSTDB || 'localhost',
    user: process.env.USERDB || 'root',
    database: process.env.DB || 'login',
    password: process.env.PASSWORDDB || '',
    port: process.env.PORTDB || 3306,
});

module.exports = connection