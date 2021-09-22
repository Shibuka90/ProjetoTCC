// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'sgcm',
      user:     'postgres',
      password: 'Grupo3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
 };
