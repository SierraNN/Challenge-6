var APIKey = '819dda7afab7329a462f8eaea8df203a';
var searchDisplayEl = $('#search-display');
var weatherDisplayEl = $('#weather-data');
var weatherNameEl = $('#weather-name');
var weatherTempEl = $('#weather-temp');
var weatherTempHighEl = $('#weather-temp-high');
var weatherTempLowEl = $('#weather-temp-low');
var weatherHumidityEl = $('#weather-humidity');
var searchFormEl = $('#search-form');
var searchName= "";
var request = new XMLHttpRequest();

document.getElementById('container').style.visibility = "hidden";
document.getElementById("button").addEventListener("click", function() {
    document.getElementById('container').style.visibility = "visible";
  });

function handleSearch(event) {
    event.preventDefault();
    var searchName = $('#search-name-input').val().trim();
    printsearchData(searchName);
    getLocationWeather(searchName);
}

function getLocationWeather(location){
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + APIKey;

    fetch (queryURL)
        .then((responseObject) =>{
            return responseObject.json();
        })
        .then((weatherData) =>{
            console.log(weatherData);

            weatherNameEl.append(weatherData.name);
            weatherDisplayEl.append(weatherData.weather[0].description);
            weatherTempEl.append(weatherData.main.temp);
            weatherTempHighEl.append(weatherData.main.temp_max);
            weatherTempLowEl.append(weatherData.main.temp_min);
            weatherHumidityEl.append(weatherData.main.humidity);
        })
}

function printsearchData(name) {
    var searchRowEl = $('<tr>');
    var searchNameTdEl = $('<td>').addClass('p-2').text(name);
    searchRowEl.append(searchNameTdEl);
    searchDisplayEl.append(searchRowEl);
}



searchFormEl.on('submit', handleSearch);

