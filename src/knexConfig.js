var knex = require('knex')({
  client: 'pg',
  version: '11.7',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'banco_teste'
  }
});

module.exports = knex;