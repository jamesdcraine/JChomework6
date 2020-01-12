$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=atlanta&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location = data.name;
var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = Math.floor(data.main.temp);
var weather = data.weather[0].main;

$('.location').prepend("Location: " + location);
$('.icon').attr('src', icon); 
$('.temp').append(temp + " °F");
$('.weather').append(weather);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=anchorage&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location2 = data.name;
var icon2 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp2 = Math.floor(data.main.temp);
var weather2 = data.weather[0].main;

$('.location2').prepend("Location: " + location2);
$('.icon2').attr('src', icon2); 
$('.temp2').append(temp2 + " °F");
$('.weather2').append(weather2);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=perth&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location3 = data.name;
var icon3 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp3 = Math.floor(data.main.temp);
var weather3 = data.weather[0].main;

$('.location3').prepend("Location: " + location3);
$('.icon3').attr('src', icon3); 
$('.temp3').append(temp3 + " °F");
$('.weather3').append(weather3);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=New+Hope&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location4 = data.name;
var icon4 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp4 = Math.floor(data.main.temp);
var weather4 = data.weather[0].main;

$('.location4').prepend("Location: " + location4);
$('.icon4').attr('src', icon4); 
$('.temp4').append(temp4 + " °F");
$('.weather4').append(weather4);



});


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location4 = data.name;
var icon5 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp5 = Math.floor(data.main.temp);
var weather5 = data.weather[0].main;

$('.location5').prepend("Location: " + location5);
$('.icon5').attr('src', icon5); 
$('.temp5').append(temp5 + " °F");
$('.weather5').append(weather5);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Baltimore&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location6 = data.name;
var icon6 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp6 = Math.floor(data.main.temp);
var weather6 = data.weather[0].main;

$('.location6').prepend("Location: " + location6);
$('.icon6').attr('src', icon6); 
$('.temp6').append(temp6 + " °F");
$('.weather6').append(weather6);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location7 = data.name;
var icon7 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp7 = Math.floor(data.main.temp);
var weather7 = data.weather[0].main;

$('.location7').prepend("Location: " + location7);
$('.icon7').attr('src', icon7); 
$('.temp7').append(temp7 + " °F");
$('.weather7').append(weather7);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location8 = data.name;
var icon8 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp8 = Math.floor(data.main.temp);
var weather8 = data.weather[0].main;

$('.location8').prepend("Location: " + location8);
$('.icon8').attr('src', icon8); 
$('.temp8').append(temp8 + " °F");
$('.weather8').append(weather8);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location9 = data.name;
var icon9 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp9 = Math.floor(data.main.temp);
var weather9 = data.weather[0].main;

$('.location9').prepend("Location: " + location9);
$('.icon9').attr('src', icon9); 
$('.temp9').append(temp9 + " °F");
$('.weather9').append(weather9);



});