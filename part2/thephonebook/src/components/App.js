import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import axios from 'axios';

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

    const hook = () => {
        console.log('effect')
        axios.get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
    }

    useEffect(hook, [])

    const addPerson = (event) => {
        event.preventDefault();

        const checkDupes = persons.find(item => item.name === newName) ? true : false

        if (checkDupes) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            const nameObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }

            setPersons(persons.concat(nameObject))
            setNewName('')
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
        <h2>Add a new contact</h2>
        <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
        <h2>Contacts</h2>
        <Persons persons={persons} newFilter={newFilter}/>
      </div>
    )
  }

export default App;