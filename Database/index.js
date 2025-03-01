const { Pool } = require('pg');
const CONSTANTS = require('../config/constants');


const authPool = new Pool({
  connectionString: CONSTANTS.URL.POSTGRES_AUTH_URL
});


let client;

const dbClient = async (item) => {
  try {
    client = await authPool.connect();
    const result = await client.query(item.query, item.values);
    return result;
  } catch (error) {
    console.error('error from dbClient =>', error);
    return error
  } finally {
    client.release();
  }
}

module.exports = {
  authPool,
  dbClient
};
