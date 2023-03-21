// FIXME: THIS SHOULD NOT BE  USED IN PRODUCTION

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'knexjs_tutorial',
      user: 'benchavez',
      password: 'postgres',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      // tableName: 'knex_migrations',
      tableName: 'knex_user_migrations',
    },
  },
};
