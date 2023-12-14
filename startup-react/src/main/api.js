
export async function getWeatherData([lat, long]) {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min&timezone=auto&temperature_unit=fahrenheit`
  ).then((rs) => rs.json());
}

export const API_KEY = "j5c7P8Gc6SoM20yyoaBJ5KMba8eN6JGprjue8FZ9IRLkZRRaM6DTPhgSSuH0vMkC";

export async function getLocationData(zipcode) {
  try {
    const response = await fetch(`https://startup.boncada.click/getZipcodeData/${zipcode}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { lat: "0", lng: "0", city: "Null Island" };
  }
}

export async function parseWeatherData(data) {
  console.log(data);

  let maxTemp = data['daily']['temperature_2m_max'][0] ?? 'NaN';
  let minTemp = data['daily']['temperature_2m_min'][0] ?? 'NaN';
  let currentTemp = data['current']['temperature_2m'] ?? 'NaN';

  document.getElementById('maxTemp').innerText = maxTemp + "°F";
  document.getElementById('minTemp').innerText = minTemp + "°F";
  document.getElementById('currentTemp').innerText = currentTemp + "°F";
}

export function parseLocationDate(data) {
  console.log(data);
  let latitude = data["lat"];
  let longitude = data["lng"];
  document.getElementById('cityName').innerText = data["city"];
  return [latitude, longitude];
}
