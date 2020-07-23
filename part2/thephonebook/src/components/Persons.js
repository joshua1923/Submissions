import React from 'react'

const Persons = ({persons, newFilter}) => {
    return (
        <ul>
        {persons.filter(item => {
            if(!newFilter.toLocaleLowerCase()) return true;
            if(item.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase())) {return true};
            return false
        }).map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
    </ul>
    )

}

export default Persons;