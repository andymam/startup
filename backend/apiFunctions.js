async function getWeatherData([lat, long]) {
    // Go to https://open-meteo.com/en/docs to get info
    return fetch("https://api.open-meteo.com/v1/forecast?" +
    `latitude=${lat}&longitude=${long}` +
    "&current=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min&timezone=auto" + 
    "&temperature_unit=fahrenheit")
        .then(rs=>rs.json());
  }
  
  async function getLocationData(zipcode) {
    try {
        const response = await fetch(`/api/weather/${zipcode}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { lat: "0", lng: "0", city: "Null Island" };
    }
  }
  
  async function parseWeatherData(data) {
    console.log(data);

    let maxTemp = data['daily']['temperature_2m_max'][0] ?? 'NaN';
    let minTemp = data['daily']['temperature_2m_min'][0] ?? 'NaN';
    let currentTemp = data['current']['temperature_2m'] ?? 'NaN';

    document.getElementById('maxTemp').innerText = maxTemp + "°F";
    document.getElementById('minTemp').innerText = minTemp + "°F";
    document.getElementById('currentTemp').innerText = currentTemp + "°F";
  }
  
  module.exports = { getWeatherData, getLocationData, parseWeatherData };
  