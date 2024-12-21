

const fetch = require('node-fetch');

const getPlayerStats = async (playerId) => {
  const response = await fetch(`https://api.sportsdata.io/v3/soccer/stats/json/PlayerSeasonStats/${playerId}`);
  const data = await response.json();
  return data;
};

module.exports = { getPlayerStats };
