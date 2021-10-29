const pgp = require('pg-promise')()
const connectionString =
    "postgresql://postgres:admin@localhost:5432/detail-pemain"


const db = pgp(connectionString)

module.exports = db;