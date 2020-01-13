// atlanta weather
$.getJSON(
    // ajax call for most elements
"http://api.openweathermap.org/data/2.5/weather?q=atlanta&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 
// ajax call for uv index
"api.openweathermap.org/data/2.5/uvi?lat=33.75&lon=84.39&APPID=8a33ff430c1f430013be38a1870e0dae",
// ajax call for 5-day forecast
// "api.openweathermap.org/data/2.5/forecast?id=4180439&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
var location1 = data.name;
var icon1 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp1 = Math.floor(data.main.temp);
var humidity1 = data.main.humidity;
var windSpeed1 = data.wind.speed;
var uVIndex1 = data.value;


$('.location1').prepend(location1);
$('.icon1').attr('src', icon1); 
$('.temp1').append("Temperature: " + temp1 + " °F");
$('.humidity1').append("Humidity: " + humidity1 + " g/m3");
$('.windSpeed1').append("Wind Speed: " + windSpeed1 + " MPH");
$('.uVIndex1').append("UV Index: " + uVIndex1);

});

// anchorage weather
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=anchorage&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location2 = data.name;
var icon2 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp2 = Math.floor(data.main.temp);
var humidity2 = data.main.humidity;
var windSpeed2 = data.wind.speed;
var uVIndex2 = data.value;

$('.location2').prepend("Location: " + location2);
$('.icon2').attr('src', icon2); 
$('.temp2').append("Temperature: " + temp2 + " °F");
$('.humidity2').append("Humidity: " + humidity2 + " g/m3");
$('.windSpeed2').append("Wind Speed: " + windSpeed2 + " MPH");
$('.uVIndex2').append("UV Index: " + uVIndex2);
});

// perth weather
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=perth&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location3 = data.name;
var icon3 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp3 = Math.floor(data.main.temp);
var humidity3 = data.main.humidity;
var windSpeed3 = data.wind.speed;
var uVIndex3 = data.value;

$('.location3').prepend("Location: " + location3);
$('.icon3').attr('src', icon3); 
$('.temp3').append("Temperature: " + temp3 + " °F");
$('.humidity3').append("Humidity: " + humidity3 + " g/m3");
$('.windSpeed3').append("Wind Speed: " + windSpeed3 + " MPH");
$('.uVIndex3').append("UV Index: " + uVIndex3);
});

// newhope, PA weather
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=New+Hope&PA&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location4 = data.name;
var icon4 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp4 = Math.floor(data.main.temp);
var humidity4 = data.main.humidity;
var windSpeed4 = data.wind.speed;
var uVIndex4 = data.value;

$('.location4').prepend("Location: " + location4);
$('.icon4').attr('src', icon4); 
$('.temp4').append("Temperature: " + temp4 + " °F");
$('.humidity4').append("Humidity: " + humidity4 + " g/m3");
$('.windSpeed4').append("Wind Speed: " + windSpeed4 + " MPH");
$('.uVIndex4').append("UV Index: " + uVIndex4);
});

// baltimore weather
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Baltimore&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location5 = data.name;
var icon5 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp5 = Math.floor(data.main.temp);
var humidity5 = data.main.humidity;
var windSpeed5 = data.wind.speed;
var uVIndex5 = data.value;

$('.location5').prepend("Location: " + location5);
$('.icon5').attr('src', icon5); 
$('.temp5').append("Temperature: " + temp5 + " °F");
$('.humidity5').append("Humidity: " + humidity5 + " g/m3");
$('.windSpeed5').append("Wind Speed: " + windSpeed5 + " MPH");
$('.uVIndex5').append("UV Index: " + uVIndex5);
});

// london weather
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location6 = data.name;
var icon6 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp6 = Math.floor(data.main.temp);
var humidity6 = data.main.humidity;
var windSpeed6 = data.wind.speed;
var uVIndex6 = data.value;

$('.location6').prepend("Location: " + location6);
$('.icon6').attr('src', icon6); 
$('.temp6').append("Temperature: " + temp6 + " °F");
$('.humidity6').append("Humidity: " + humidity6 + " g/m3");
$('.windSpeed6').append("Wind Speed: " + windSpeed6 + " MPH");
$('.uVIndex6').append("UV Index: " + uVIndex6);
});

// paris weather
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location7 = data.name;
var icon7 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp7 = Math.floor(data.main.temp);
var humidity7 = data.main.humidity;
var windSpeed7 = data.wind.speed;
var uVIndex7 = data.value;

// Moment.js Date
var moment = require('moment');

$('.location7').prepend("Location: " + location7);
$('.icon7').attr('src', icon7); 
$('.temp7').append("Temperature: " + temp7 + " °F");
$('.humidity7').append("Humidity: " + humidity7 + " g/m3");
$('.windSpeed7').append("Wind Speed: " + windSpeed7 + " MPH");
$('.uVIndex7').append("UV Index: " + uVIndex7);
moment().format();

});

