import React, { useState, useEffect } from 'react'
import Personform from './components/Personform'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
    //const {names} = props
    //console.log(props)
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('Martin Fowler')
    const [ newNumber, setNewNumber] = useState('39-44-5324523')
    const [ currentFilter, setFilter] = useState('')

    const hook = () => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log(response.data)
                setPersons(response.data)
            })
    }
    useEffect(hook, [])

    // new person from input
    const addName = (event) => {
        event.preventDefault()
        // check if the name already exists
        const isNameExist = persons.find(person => person.name === newName)

        if (isNameExist) {
            alert(`${newName} is already added to phonebook`)
        }
        else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
            console.log('button clicked', event.target)
        }
    }

    // handle changes in name input
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
        console.log('new name changed', newName)
    }

    // handle changes in number input
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
        console.log('new name changed', newName)
    }

    // handle filter words
    const handleFilterWords = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)  
    }

    return (
    <div>
        <h2>Phonebook</h2>
        <Filter handleFilterWords={handleFilterWords} />
        <h2>add a new</h2>
        <Personform addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
        <h2>Numbers</h2>
        <Persons persons={persons} filterString={currentFilter} />
    </div>
    )
}

export default App