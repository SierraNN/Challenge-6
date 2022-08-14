var APIKey = '7b094b36cf92efa4eac74fd2998b1898';
var searchDisplayEl = $('#search-display');
var searchFormEl = $('#search-form');
var city = "$('#search-name-input')";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var searchName= "";
var request = new XMLHttpRequest();

function handleSearch(event) {
    event.preventDefault();
    var searchName = $('#search-name-input').val().trim();
    printsearchData(searchName);
    searchFormEl[0].reset();
}

function printsearchData(name) {
    var searchRowEl = $('<tr>');
    var searchNameTdEl = $('<td>').addClass('p-2').text(name);
    searchRowEl.append(searchNameTdEl);
    searchDisplayEl.append(searchRowEl);
}

function getLocation(event){

    event.preventDefault()
    
    fetch(queryURL) 

        .then(function(response){
        return response.json();
        }).then(function(data){
            
            var weatherType = data.weather_main;
            var weatherDesc = data.weather_description;
            var dateTime = data.dt;
            var temp = data.temp;
            var tempHigh = data.temp_max;
            var tempLow = data.temp_min;
            var wind = data.wind_speed;
            var humidity = data.humidity;
            var uvi = data.uvi;
            
            console.log(weatherType, weatherDesc, dateTime, temp, tempHigh, tempLow, wind, humidity, uvi);

        })
};

searchFormEl.on('submit', handleSearch);
searchFormEl.on('submit', getLocation);
