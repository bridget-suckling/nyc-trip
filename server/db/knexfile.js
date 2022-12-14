// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path = require('path')
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, './dev.sqlite3'),
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: '/app/storage/prod.sqlite3',
    },
    useNullAsDefault: true,
  },
}
