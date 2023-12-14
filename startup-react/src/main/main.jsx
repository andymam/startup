import React, { useState, useEffect } from 'react';
import { getWeatherData, getLocationData, parseWeatherData, parseLocationDate } from './api';

const Main = () => {
  const [cityName, setCityName] = useState('City Name, US');
  const [maxTemp, setMaxTemp] = useState('0');
  const [minTemp, setMinTemp] = useState('0');
  const [currentTemp, setCurrentTemp] = useState('0');

  useEffect(() => {
    const userName = localStorage.getItem('userName') || 'Mystery';
    document.getElementById('welcome').innerText = `Welcome, ${userName}`;
  }, []);

  const run = async (zipcode) => {
    try {
      const locationData = await fetchLocationData(zipcode);
      const [latitude, longitude] = parseLocationDate(locationData);

      const weatherData = await fetchWeatherData([latitude, longitude]);
      parseWeatherData(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  const parseWeatherData = (data) => {
    let maxTempValue = data['daily']['temperature_2m_max'][0] ?? 'NaN';
    let minTempValue = data['daily']['temperature_2m_min'][0] ?? 'NaN';
    let currentTempValue = data['current']['temperature_2m'] ?? 'NaN';

    setMaxTemp(`${maxTempValue}°F`);
    setMinTemp(`${minTempValue}°F`);
    setCurrentTemp(`${currentTempValue}°F`);
  };

  const parseLocationDate = (data) => {
    let latitude = data['lat'];
    let longitude = data['lng'];
    setCityName(data['city']);
    return [latitude, longitude];
  };

  const checkBtn = () => {
    const zipCode = document.getElementById('searchBar').value;
    run(zipCode);
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div>
          <img src="IMG_5752.jpg" width="200em" alt="Weather" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4">
          <span id="welcome"></span>
          <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>

          <div className="input-group rounded mb-3">
            <input
              type="search"
              className="form-control rounded"
              id="searchBar"
              placeholder="Zip Code"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <a href="#!" type="button" onClick={checkBtn}>
              <span className="input-group-text border-0 fw-bold" id="search-addon">
                Check!
              </span>
            </a>
          </div>
          <div className="card shadow-0 border">
            <div className="card-body p-4">
              <h4 className="mb-1 sfw-normal" id="cityName">
                {cityName}
              </h4>
              <p className="mb-2" id="currentTemp">
                Current temperature: <strong>{currentTemp}</strong>
              </p>
              <p>
                Max: <strong id="maxTemp">{maxTemp}</strong>, Min: <strong id="minTemp">{minTemp}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
