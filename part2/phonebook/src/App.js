import React, { useState, useEffect } from 'react'
import Personform from './components/Personform'
import Person from './components/Person'
import Filter from './components/Filter'
import personServices from './services/persons'
import filterAllPersons from './services/filterPersons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
    //const {names} = props
    //console.log(props)
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('Martin Fowler')
    const [ newNumber, setNewNumber] = useState('39-44-5324523')
    const [ currentFilter, setFilter] = useState('')
    const [ notification, setNotification] = useState(null)
    const [notificationType, setNotificationType] = useState(null)
    var filteredPersons

    const hook = () => {
        personServices
            .getAll()
            .then(persons => {
                setPersons(persons)
            })
    }
    useEffect(hook, [])

    // new person from input
    const addName = (event) => {
        event.preventDefault()
        // check if the name already exists
        const personExists = persons.find(person => person.name === newName)
        console.log(personExists)

        if (personExists) {
            //alert(`${newName} is already added to phonebook`)
            if(window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)) {
                var id = personExists.id
                const personObject = {
                    name: newName,
                    number: newNumber
                }
                personServices
                    .update(id,personObject)
                    .then(updatedPerson => {
                        setPersons(persons.map(person => person.id !== id ? person : updatedPerson))
                        setNotification(`Updated ${updatedPerson.name}`)
                        setNotificationType('Notification')
                        setTimeout(() => {setNotification(null)}, 5000)
                    })
                    .catch(error => {
                        console.log("Failed to update")
                        setNotification(`Information of ${personObject.name} has already been removed from the server`)
                        setNotificationType('Error')
                        setTimeout(() => {setNotification(null)}, 5000)
                    })
            }
        }
        else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            personServices
                .create(personObject)
                .then( addedPerson => {
                    setPersons(persons.concat(addedPerson))
                    setNewName('')
                    setNewNumber('')
                    setNotification(`Added ${addedPerson.name}`)
                    setNotificationType('Notification')
                    setTimeout(() => {setNotification(null)}, 5000)
                })
                .catch(error => {
                    console.log('Failed to add new name')
                })
            
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

    // delete button press
    const deleteButton = (person) => {
        var id = person.id
        if(window.confirm(`Delete ${person.name}?`)) {
            personServices
            .deleteOne(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
                setNotification(`Deleted ${person.name}`)
                setNotificationType('Notification')
                setTimeout(() => {setNotification(null)}, 5000)
            })
            .catch(error => console.log("Failed to delete"))
        }
        
    }

    if (currentFilter.length === 0) {
        filteredPersons = persons
    }
    else {
        filteredPersons = filterAllPersons(persons, currentFilter)
        console.log(filteredPersons) 
    }
    return (
    <div>
        <h2>Phonebook</h2>
        <Notification message={notification} notificationType={notificationType} />
        <Filter handleFilterWords={handleFilterWords} />
        <h2>add a new</h2>
        <Personform 
            addName={addName} 
            newName={newName} 
            handleNameChange={handleNameChange} 
            newNumber={newNumber} 
            handleNumberChange={handleNumberChange} 
        />
        <h2>Numbers</h2>
        {filteredPersons.map(person => 
            <Person 
                key={person.name}
                person={person} 
                deleteButton={() => deleteButton(person)}
            />
        )}
    </div>
    )
}

export default App