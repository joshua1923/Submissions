import React, {useState, useEffect} from 'react';
import Languages from './Languages';
import Weather from './Weather'
import axios from 'axios';

const SingleCountry = ({country}) => {

    const [weather, setWeather] = useState([]);

    const hook = () => {
        axios.get(`http://api.weatherstack.com/current?access_key=18a4ad346b128d28dbb942675ba113bf&query=${country.name}`).then(response => {
            console.log(response.data.current)
            setWeather(response.data.current)
        })
    }

    useEffect(hook, [])

    return(
        <div>
            <h2 key={country.name}>{country.name}</h2>
            <p><strong>Capital: </strong>{country.capital}<br/>Population: {country.population}</p>
            <h2>Languages</h2>
            <Languages country={country} />
            <img width="100" height="100" src={country.flag} alt="flag"/>
            <Weather country={country} weather={weather} />
        </div>
    )
}

export default SingleCountry;