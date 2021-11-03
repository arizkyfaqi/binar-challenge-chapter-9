const Pool = require("pg").Pool;

const pool = new Pool({
  host: "127.0.0.1",
  user: "postgres",
  password: "admin",
  port: 5432,
  database: "challenge_sembilan",
});

module.exports = pool;
