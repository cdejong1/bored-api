const activities = require('../data/activities.json');

const getRandomActivity = (req, res) => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const activity = activities[randomIndex];
  res.status(200).json(activity);
};

module.exports = {
  getRandomActivity,
};
