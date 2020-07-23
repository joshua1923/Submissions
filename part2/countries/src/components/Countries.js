import React from 'react';
import SingleCountry from './SingleCountry';
import CountryDetails from './CountryDetails';

const Countries = ({countries, newFilter}) => {

    const getCountriesByFilter = () => {
        const countriesFiltered = countries.filter(item => {
            if(!newFilter.toLocaleLowerCase()) return true;
            if(item.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase())) {return true}
            return false;
        })

        return countriesFiltered;
    }

    const countriesByFilter = getCountriesByFilter();
    
    switch(true){
        case (countriesByFilter.length > 10):
            return <div><p>Too many matches, specify another filter</p></div>
        case (countriesByFilter.length === 1):
            return <div>{countriesByFilter.map((country) => <SingleCountry country={country}/>)}</div>
        default:
            
            return <div>{countriesByFilter.map((country) => <CountryDetails country={country} />)}</div> 
    }
}

export default Countries;