const F = require('ng-faker');
const R = require('ramda');

const { USER_TABLE_NAME } = require('../constants');
const { encryptPassword } = require('../src/utils/password');


const createUser = () => ({
  username: F.name.firstName(),
  password: encryptPassword(F.lorem.word())
});

const users = R.times(createUser, 10);

exports.seed = knex => knex(USER_TABLE_NAME).del()
  .then(() => knex(USER_TABLE_NAME).insert(users))
  .catch((error) => console.error(error.message));
