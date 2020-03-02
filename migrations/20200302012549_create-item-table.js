const {
  BUCKETLIST_TABLE_NAME,
  ITEMS_TABLE_NAME
} = require('../constants');


exports.up = function(knex) {
  return knex.schema
    .createTable(ITEMS_TABLE_NAME, table => {
      table.increments();
      table.string('name').notNullable();
      table.boolean('status').notNullable().defaultTo(false);
      table.integer('bucketlist_id').unsigned().references('id')
        .inTable(BUCKETLIST_TABLE_NAME).onDelete('CASCADE');
    }).catch(error => console.error(error.message));
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists(ITEMS_TABLE_NAME)
    .catch(error => console.error(error.message));
};
