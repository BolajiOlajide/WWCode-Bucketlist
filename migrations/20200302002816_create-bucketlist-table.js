const {
  BUCKETLIST_TABLE_NAME,
  USER_TABLE_NAME
} = require('../constants');


exports.up = function(knex) {
  return knex.schema
    .createTable(BUCKETLIST_TABLE_NAME, table => {
      table.increments();
      table.string('name').notNullable();
      table.integer('user_id').unsigned().references('id')
        .inTable(USER_TABLE_NAME).onDelete('CASCADE');
    }).catch(error => console.error(error.message));
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists(BUCKETLIST_TABLE_NAME)
    .catch(error => console.error(error.message));
};
