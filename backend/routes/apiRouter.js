const express = require('express');
const apiRouter = express.Router();

const { getLocationData, getWeatherData, parseWeatherData } = require('../apiFunctions');

apiRouter.get('/weather/:zipcode', async (req, res) => {
  const zipcode = req.params.zipcode;

  try {
    const locationData = await getLocationData(zipcode);
    const weatherData = await getWeatherData(locationData);
    const parsedData = await parseWeatherData(weatherData);

    res.json(parsedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = apiRouter;
