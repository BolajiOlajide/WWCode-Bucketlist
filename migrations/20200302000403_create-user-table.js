const logger = require('winston');

const { USER_TABLE_NAME } = require('../constants');


exports.up = function(knex) {
  return knex.schema
    .createTable(USER_TABLE_NAME, table => {
      table.increments().comment('This is the primary key for this table');
      table.string('username').notNullable().comment('randomly generated ID for this user');
      table.string('password').notNullable().comment('hashed password belonging to user');
    }).catch(error => logger.error(error));
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists(USER_TABLE_NAME)
    .catch(error => logger.error(error));
};
