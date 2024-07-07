const mysql = require('mysql2/promise');

async function connect() {
  try {
      const connection = await mysql.createConnection({
          host: 'database-1.c9g2kw26cjej.us-east-2.rds.amazonaws.com',
          user: 'admin',
          password: 'z3VsCJFsvbBdEUM0B4ud',
          database: 'database-1',
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

