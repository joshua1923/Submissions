import React from 'react';

const Weather = ({country, weather}) => {
 return (
    <div>            
        <h2>Weather in {country.capital}</h2>
        <p><strong>Temperature: </strong>{weather.temperature} celcius</p>
        <img width='100' height='100' src={weather.weather_icons} alt='weather icon'/>
        <p><strong>Wind: </strong>{weather.wind_speed} mph direction {weather.wind_dir}</p>
    </div>)
}

export default Weather;