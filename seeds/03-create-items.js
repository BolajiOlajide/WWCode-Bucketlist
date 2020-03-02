const F = require('ng-faker');
const R = require('ramda');

const { ITEMS_TABLE_NAME } = require('../constants');


const randomItems = [
  'Swim in the Atlantic Ocean',
  'Visit Honorary Member: The Great Pyramid of Giza in Egypt',
  'Visit The Great Wall of China',
  'Visit The ruins of Petra in Jordan',
  'Visit The Colosseum in Rome',
  'Visit Chichen Itza in Yucatan, Mexico',
  'Visit Machu Picchu in Cuzco, Peru',
  'Visit Taj Mahal in Uttar Pradesh, India',
  'Visit Christ the Redeemer in Rio de Janeiro, Brazil',
  'Sail around the Galapagos Islands in Ecuador',
  'Island hop around Greece',
  'Spend a week camping off the grid',
  'Spend a week in each of the major “global” cities (New York, Paris, London, and Tokyo)',
  'Swim with wild pigs in Exuma, Bahamas',
  'Reach “expert” level in your field',
  'Mentor a younger or less experienced coworker',
  'Master a new work-related skill each year',
  'Speak at an industry conference or event',
  'Establish a healthy work-life balance',
  'Take a month-long vacation',
  'Start a business or side gig for something you are passionate about',
  'Have a positive work attitude every day',
  'Receive a big promotion',
  'Lead a major project through successful implementation',
  'Go vegetarian for one month',
  'Swim in the The Red Sea',
  'Go vegan for one month',
  'Eat an entirely plant-based diet for one month!',
  'Cook all your own meals for two weeks straight',
  'Meditate for 15 minutes every night before bed',
  'Schedule an appointment with a mental health counselor',
  'Get a gym membership',
  'Compliment yourself every day in the mirror',
  'Floss every night!'
];

const createItem = () => ({
  name: randomItems.pop(),
  status: F.random.boolean(),
  bucketlist_id: F.random.number({ min: 1, max: 10 })
});

const items = R.times(createItem, 30);

exports.seed = knex => knex(ITEMS_TABLE_NAME).del()
  .then(() => knex(ITEMS_TABLE_NAME).insert(items))
  .catch((error) => console.error(error.message));
