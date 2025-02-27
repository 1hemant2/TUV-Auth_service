const { Pool } = require('pg');
const CONSTANTS = require('../config/constants');

const pool = new Pool({
  connectionString: CONSTANTS.URL.POSTGRES_AUTH_URL
});
const client = await pool.connect();

const queryExector = async (query, values) => {
  try {
    const result = await client.query(query, values);
    return result;
  } catch (error) {
    return error
  } finally {
    client.release();
  }
}

module.exports = {
  pool,
  queryExector
};
