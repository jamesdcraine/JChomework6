$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=atlanta&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location1 = data.name;
var icon1 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp1 = Math.floor(data.main.temp);
var weather1 = data.weather[0].main;

$('.location1').prepend("Location: " + location1);
$('.icon1').attr('src', icon1); 
$('.temp1').append(temp1 + " °F");
$('.weather1').append(weather1);



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


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Baltimore&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

function(data){
console.log(data);
var location5 = data.name;
var icon5 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp5 = Math.floor(data.main.temp);
var weather5 = data.weather[0].main;

$('.location5').prepend("Location: " + location5);
$('.icon5').attr('src', icon5); 
$('.temp5').append(temp5 + " °F");
$('.weather5').append(weather5);



});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

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

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 

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

// // Atlanta 5-day AJAX call
// $.getJSON("api.openweathermap.org/data/2.5/forecast?id=4180439&APPID=8a33ff430c1f430013be38a1870e0dae",

// function(data){
// console.log(data);
// var fiveDay1 = data.name; 

// }


// Anchorage 5 day
// $.getJSON("api.openweathermap.org/data/2.5/forecast?id=5879400&APPID=8a33ff430c1f430013be38a1870e0dae",

// // function(data){
// // console.log(data);
// // var fiveDay2 = data.name; 

// Perth 5 day

// $.getJSON("api.openweathermap.org/data/2.5/forecast?id=2063523&APPID=8a33ff430c1f430013be38a1870e0dae",

// // function(data){
// // console.log(data);
// // var fiveDay3 = data.name; 

// New Hope 5 day

// $.getJSON("api.openweathermap.org/data/2.5/forecast?id=5203197&APPID=8a33ff430c1f430013be38a1870e0dae",

// // function(data){
// // console.log(data);
// // var fiveDay4 = data.name; 

// baltimore 5 day

// $.getJSON("api.openweathermap.org/data/2.5/forecast?id=4347778&APPID=8a33ff430c1f430013be38a1870e0dae",

// // function(data){
// // console.log(data);
// // var fiveDay5 = data.name; 

// london 5 day

// $.getJSON("api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=8a33ff430c1f430013be38a1870e0dae",

// // function(data){
// // console.log(data);
// // var fiveDay6 = data.name; 

// paris 5 day

// $.getJSON("api.openweathermap.org/data/2.5/forecast?id=2988507&APPID=8a33ff430c1f430013be38a1870e0dae",

// // function(data){
// // console.log(data);
// // var fiveDay7 = data.name; 
