const logger = require('winston');

const { BUCKETLIST_TABLE_NAME, ITEMS_TABLE_NAME } = require('../constants');


exports.up = function(knex) {
  return knex.schema
    .createTable(ITEMS_TABLE_NAME, table => {
      table.increments().comment('This is the primary key for this table');
      table.string('name').notNullable().comment('name of the bucketlist');
      table.boolean('status')
      table.integer('bucketlist_id').unsigned().references('id')
        .inTable(BUCKETLIST_TABLE_NAME).onDelete('CASCADE')
        .comment('the owner of this bucketlist');
    }).catch(error => logger.error(error));
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists(ITEMS_TABLE_NAME)
    .catch(error => logger.error(error));
};
