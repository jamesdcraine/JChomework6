// atlanta UV index
$.getJSON("api.openweathermap.org/data/2.5/uvi?lat=33.75&lon=84.39&APPID=8a33ff430c1f430013be38a1870e0dae",
function(data){
    console.log(data);
    var uVIndex1 = data.name; 
}
// anchorage UV index
$.getJSON("api.openweathermap.org/data/2.5/uvi?lat=61.21&lon=-122.37&APPID=8a33ff430c1f430013be38a1870e0dae",
function(data){
    console.log(data);
    var uVIndex2 = data.name; 
}
// perth UV index
$.getJSON("api.openweathermap.org/data/2.5/uvi?lat=31.95&lon=115.86&APPID=8a33ff430c1f430013be38a1870e0dae",
function(data){
    console.log(data);
    var uVIndex2= data.name; 
}
// new hope UV index
$.getJSON("api.openweathermap.org/data/2.5/uvi?lat=40.36&lon=74.95&APPID=8a33ff430c1f430013be38a1870e0dae",
function(data){
    console.log(data);
    var uVIndex2 = data.name; 
}
// baltimore UV index
$.getJSON("api.openweathermap.org/data/2.5/uvi?lat=39.29&lon=76.61&APPID=8a33ff430c1f430013be38a1870e0dae",
function(data){
    console.log(data);
    var uVIndex2 = data.name; 
}
// london UV index
$.getJSON("api.openweathermap.org/data/2.5/uvi?lat=51.51&lon=0.13&APPID=8a33ff430c1f430013be38a1870e0dae",
function(data){
    console.log(data);
    var uVIndex2 = data.name; 
}
// paris UV index
$.getJSON("api.openweathermap.org/data/2.5/uvi?lat=48.85&lon=2.35&APPID=8a33ff430c1f430013be38a1870e0dae",
function(data){
    console.log(data);
    var uVIndex2 = data.name; 
}