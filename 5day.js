// Atlanta 5-day AJAX call
$.getJSON("api.openweathermap.org/data/2.5/forecast?id=4180439&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
console.log(data);
var fiveDay1 = data.name; 

}


// Anchorage 5 day
$.getJSON("api.openweathermap.org/data/2.5/forecast?id=5879400&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
console.log(data);
var fiveDay2 = data.name; 

// Perth 5 day

$.getJSON("api.openweathermap.org/data/2.5/forecast?id=2063523&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
console.log(data);
var fiveDay3 = data.name; 

// New Hope 5 day

$.getJSON("api.openweathermap.org/data/2.5/forecast?id=5203197&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
console.log(data);
var fiveDay4 = data.name; 

// baltimore 5 day

$.getJSON("api.openweathermap.org/data/2.5/forecast?id=4347778&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
console.log(data);
var fiveDay5 = data.name; 

// london 5 day

$.getJSON("api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
console.log(data);
var fiveDay6 = data.name; 

// paris 5 day

$.getJSON("api.openweathermap.org/data/2.5/forecast?id=2988507&APPID=8a33ff430c1f430013be38a1870e0dae",

function(data){
console.log(data);
var fiveDay7 = data.name; 
