
const mysql = require('mysql');
let pool = mysql.createPool({
    host: 'hr-rds-1.cyt9z6pr4wze.us-east-1.rds.amazonaws.com',
    user: 'binil-node-hr',
    password: 'binil@123',
    database: 'binil-node-hr',
    port: 3306,
    charset: 'utf8mb4'
})

module.exports = pool;