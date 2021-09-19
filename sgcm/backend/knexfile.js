module.exports = {
    client: 'postgresql',
    connection: {
      database: 'scgm',
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
