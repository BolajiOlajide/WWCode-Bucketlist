const F = require('ng-faker');

const { BUCKETLIST_TABLE_NAME } = require('../constants');


const createBucketList = (user_id) => {
  const randomWord = F.name.firstName();
  return {
    name: `${randomWord}'s bucketlist`,
    user_id
  };
};

const userIds = [1,2,3,4,5,6,7,8,9,10];
const bucketlists = userIds.map((userId) => createBucketList(userId));

exports.seed = knex => knex(BUCKETLIST_TABLE_NAME).del()
  .then(() => knex(BUCKETLIST_TABLE_NAME).insert(bucketlists))
  .catch((error) => console.error(error.message));
