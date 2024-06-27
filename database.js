const mysql = require('mysql2/promise');

async function connect() {
  try {
      const connection = await mysql.createConnection({
          host: 'sql5.freemysqlhosting.net',
          user: 'sql5716389',
          password: 'ITpVEA1ciS',
          database: 'sql5716389'
      });
      console.log("Connected to the database!");
      return connection;
  } catch (error) {
      console.error("Error connecting to the database:", error);
      throw error;
  }
}


module.exports = connect;

