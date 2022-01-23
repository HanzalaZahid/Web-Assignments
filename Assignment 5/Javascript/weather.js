//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//API KEY = b8002e24d0cbbed23acba2a284e1448e
//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=b8002e24d0cbbed23acba2a284e1448e
//http://openweathermap.org/img/wn/10d@2x.png

//GEO CODING
//https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=5b29e449c7b5429f8808772f63b70a0b


// GETTING HTML TAGS

//current
const currentTemp = document.getElementById('current_temp');
const currentWeather = document.getElementById('current_weather');

//today
const todayTemp = document.getElementById('today_temp');
const todayWeather = document.getElementById('today_weather');
const todayIcon = document.getElementById('today_icon');
// daily
const daily_Weather = document.getElementById('dailyWeather');

//UPDATE WEATHER


function updateWeather()
{
    
    let location = document.getElementById('inputCity').value;

    fetch('https://api.opencagedata.com/geocode/v1/json?q='+location+'&key=5b29e449c7b5429f8808772f63b70a0b')
    .then(response=>response.json())
    .then(data=>
            {
                let coordinates = data.results[0].geometry;
                let lng = coordinates.lng;
                let lat = coordinates.lat;
                console.log("Longitutde: "+lng+" Latitude: "+lat);
                openWeather(lng, lat);
            }
        )
    .catch(error=>
            {
                alert ("Wrong Location");
            }
        )
}

function openWeather(lng, lat)
{
    console.log("Longitutde1: "+lng+" Latitude1: "+lat);
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lng+'&units=metric&appid=b8002e24d0cbbed23acba2a284e1448e')
    .then(response=>response.json())
    .then(data=>
            {
                console.log(data);

                //current
                currentTemp.innerHTML = parseInt(data.current.temp)+'&#730';
                currentWeather.innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.current.weather[0].icon+'.png"><span>'+data.current.weather[0].main+'</span>';
                console.log("WEATHER EXECUTED");

                //today
                todayTemp.innerHTML = parseInt(data.daily[0].temp.day)+'&#730';
                todayWeather.innerHTML = data.daily[0].weather[0].main;
                todayIcon.innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.daily[0].weather[0].icon+'@2x.png">';
                console.log("DAY EXECUTED");
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let dailyWeather = "";
                for (let i = 1 ; i <=6 ; i++)
                {
                    var d = new Date(data.daily[i].dt * 1000);
                    var dayName = days[d.getDay()];
                    console.log(dayName);
                    var dayTemp = parseInt(data.daily[i].temp.day);
                    var dayIcon = '<img src="http://openweathermap.org/img/wn/'+data.daily[i].weather[0].icon+'@2x.png">';
                        dailyWeather += '<div class="daily_weather">';
                        dailyWeather += '<div class="container">';
                        dailyWeather += '<div class="heading">'+dayName+'</div>';
                        dailyWeather += '<div class="icon">'+dayIcon+'</div>';
                        dailyWeather += '<div class="temp">'+dayTemp+' &#730</div>';
                        dailyWeather += '</div>';
                        dailyWeather += '</div>';

                }
                daily_Weather.innerHTML = dailyWeather;
                
            }
                
        )
    .catch(error=>
            {
                alert("Unable to fetch Weather Details");
            } 
        )
}


// ON LOAD WEATHER

openWeather(-0.1276474 , -51.5073219);

if (navigator.geolocation)
{
    navigator.geolocation.watchPosition(showPosition);
}



function showPosition(position) {
    var lat =  position.coords.latitude;
    var lng = position.coords.longitude;
    openWeather(lng, lat);
}