import React, { useState } from 'react';
import SingleCountry from './SingleCountry';

const showCountryDetails = (param, setDetails) => {
    return (
        setDetails(<SingleCountry country={param} />)
    )
}

const CountryDetails = ({ country }) => {

    const [details, setDetails] = useState([]);

    return (
        <div>{country.name}&nbsp;<button onClick={() => showCountryDetails(country, setDetails)}>show</button>{details}</div>
    )
}

export default CountryDetails;