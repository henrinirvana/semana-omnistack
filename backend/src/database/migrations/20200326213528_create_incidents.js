
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
      
      //chave primária
      table.increments();
      
      //demais campos
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      //chave estrangeira
      table.string('ong_id').notNullable();

      //relacionamento
      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  