import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personService from '../services/personService';

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

    useEffect(() => {
        personService.getAll().then(initialData => {
            setPersons(initialData)
        })
    }, [])

    const addPerson = (event) => {
        event.preventDefault();

        const checkDupes = persons.find(item => item.name === newName) ? true : false

        if (checkDupes) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }

            personService.create(personObject).then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
            })
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
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