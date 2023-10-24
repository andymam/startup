async function getWeatherData([lat, long]){
    // Go to https://open-meteo.com/en/docs to get info
    return fetch("https://api.open-meteo.com/v1/forecast?" +
    `latitude=${lat}&longitude=${long}` +
    "&current=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min&timezone=auto" + 
    "&temperature_unit=fahrenheit")
        .then(rs=>rs.json());
}
    
const API_KEY = "DemoOnly00gH8wbb344Ca9wRlS2B9Btt3Nqg7g6GkvvSswAhCSX2jtqxzmK8kWuM";
async function getLocationData(address){
   return {lat:40.7128, lng:-74.0060, city:"New York"}
    // return fetch(`https://www.zipcodeapi.com/rest/${API_KEY}/info.json/${address}/degrees`).then(rs=>rs.json());
}

async function parseWeatherDate(data){
    console.log(data);
    let maxTemp = data['daily']['temperature_2m_max'][0];
    let minTemp = data['daily']['temperature_2m_min'][0];
    document.getElementById('maxTemp').innerText = maxTemp + "°F";
    document.getElementById('minTemp').innerText = minTemp + "°F";
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
    run(document.getElementById("seachBar").value);
}

window.onload = function (){
    run("84604")
};