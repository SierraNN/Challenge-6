var APIKey = '7b094b36cf92efa4eac74fd2998b1898';
var searchDisplayEl = $('#search-display');
var searchFormEl = $('#search-form');
var city = "$('#search-name-input')";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var searchName= "";
var request = new XMLHttpRequest();

function handleSearch(event) {
    event.preventDefault();
    var searchName = city.val().trim();
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
        })
        .then(function(data){
            console.log(data);
            console.log("array", data[0])

            var cityName = data[0].name;
            console.log("cityName", cityName);
            cityEl.textContent = cityName;
            

            var lat = data[0].lat;
            var lon = data[0].lon;


    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=d2e2c17de561fb5216c9679df62394b5&units=imperial')

        .then(function(response){
        return response.json();
        }).then(function(data){
            
            var weatherType = data.current.weather_main;
            var weatherDesc = data.current.weather_description;
            var dateTime = data.current.dt;
            var temp = data.current.temp;
            var tempHigh = data.current.temp_max;
            var tempLow = data.current.temp_min;
            var wind = data.current.wind_speed;
            var humidity = data.current.humidity;
            var uvi = data.current.uvi;
            
            console.log(weatherType, weatherDesc, dateTime, temp, tempHigh, tempLow, wind, humidity, uvi);

        })

        });

};

searchFormEl.on('submit', handleSearch, getLocation);

