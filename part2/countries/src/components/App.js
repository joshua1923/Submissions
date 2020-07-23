import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './Filter';
import Countries from './Countries'

const App = () => {

    const [newFilter, setNewFilter] = useState('');
    const [countries, setCountries] = useState([]);
    
    const hook = () => {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            console.log(response.data)
            setCountries(response.data)
        })
    }

    useEffect(hook, [])

    return (
        <div>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
            <Countries countries={countries} newFilter={newFilter} />
        </div>
    )
}

export default App;