async function getWeatherData([lat, long]){
    // Go to https://open-meteo.com/en/docs to get info
    return fetch("https://api.open-meteo.com/v1/forecast?" +
    `latitude=${lat}&longitude=${long}` +
    "&current=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min&timezone=auto" + 
    "&temperature_unit=fahrenheit")
        .then(rs=>rs.json());
}
    
const API_KEY = "j5c7P8Gc6SoM20yyoaBJ5KMba8eN6JGprjue8FZ9IRLkZRRaM6DTPhgSSuH0vMkC";
async function getLocationData(zipcode){
    return fetch(`https://www.zipcodeapi.com/rest/${API_KEY}/info.json/${zipcode}/degrees`, { mode: 'no-cors'}).then(rs=>rs.json()).catch(s=>{console.log(s); return {lat:"0",lng:"0",city:"Null Island"}});
}

async function parseWeatherDate(data){
    console.log(data);
    let maxTemp = data['daily']['temperature_2m_max'][0];
    let minTemp = data['daily']['temperature_2m_min'][0];
    let currentTemp = data['daily']['temperature_2m'][0];
    document.getElementById('maxTemp').innerText = maxTemp + "°F";
    document.getElementById('minTemp').innerText = minTemp + "°F";
    document.getElementById('currentTemp').innerText = currentTemp + "°F";
}
async function parseLocationDate(data){
    console.log(data);
    let latitude = data["lat"];
    let longitude = data["lng"];
    document.getElementById('cityName').innerText = data["city"];
    return [latitude, longitude];
}
function run(zipcode){
    console.log(zipcode);
    getLocationData(zipcode)
        .then(parseLocationDate)
        .then(getWeatherData)
        .then(parseWeatherDate);
}

function checkBtn(){
    const zipCode = document.getElementById("searchBar").value;
    run(zipCode);
}


window.onload = function () {
    const userName = localStorage.getItem('userName') || 'Mystery';
    document.getElementById('welcome').innerText = `Welcome, ${userName}`;
};