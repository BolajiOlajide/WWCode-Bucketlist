const { USER_TABLE_NAME } = require('../constants');


exports.up = function(knex) {
  return knex.schema
    .createTable(USER_TABLE_NAME, table => {
      table.increments();
      table.string('username').notNullable();
      table.string('password').notNullable();
    }).catch(error => console.error(error.message));
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists(USER_TABLE_NAME)
    .catch(error => console.error(error.message));
};
