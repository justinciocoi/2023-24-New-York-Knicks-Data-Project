const mysql = require('mysql2/promise');

async function connect() {
  try {
      const connection = await mysql.createConnection({
          host: 'database-1.c9g2kw26cjej.us-east-2.rds.amazonaws.com',
          user: 'justin',
          password: 'jman0617',
          database: 'NBA_Stats',
          port: 3306
      });
      console.log("Connected to the database!");
      return connection;
  } catch (error) {
      console.error("Error connecting to the database:", error);
      throw error;
  }
}


module.exports = connect;

