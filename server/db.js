
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.query("SELECT current_database() AS db, NOW() AS time")
  .then(result => console.log("Database connected:", result.rows[0]))
  .catch(error => console.error("Database connection failed:", error.message));

module.exports = pool;
