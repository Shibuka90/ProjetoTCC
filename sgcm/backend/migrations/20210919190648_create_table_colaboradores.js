
exports.up = function(knex) {
    return knex.schema.createTable('colaboradores', table => {
        table.increments('codigo').primary()
        table.string('nome', 50).notNull()
        table.string('email', 50).notNull().unique()
        table.string('cpf', 15).notNull().unique()
        table.string('datanasc', 10).notNull()
        table.string('estadocivil', 20).notNull()
        table.string('sexo',2).notNull()
        table.string('cargo', 50).notNull()
        table.string('siglacr', 15)
        table.string('cr', 15).unique()
        table.string('ufcr', 2)
        table.string('cep',8).notNull().references('cep').intoTable('cep')
        table.string('tipo',15).notNull()
        table.string('endereco', 100).notNull()
        table.string('numero',5).notNull()
        table.string('bairro', 100).notNull()
        table.string('ciddade', 50).notNull()
        table.string('ufcidade',2).notNull()
        table.string('telddd',4)
        table.string('tel',8)
        table.string('celddd',4).notNull()
        table.string('cel', 9).notNull()
        table.boolean('admin').notNull().defaultTo(false)
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('colaboradores')
  };
