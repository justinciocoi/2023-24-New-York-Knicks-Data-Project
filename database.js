const mysql = require('mysql2/promise');

async function connect() {
  const connection = await mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5716389',
    password: 'ITpVEA1ciS',
    database: 'sql5716389'
  });
  return connection;
}

module.exports = connect;

