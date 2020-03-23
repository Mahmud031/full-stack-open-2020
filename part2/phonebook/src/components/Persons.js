import React from 'react'

const Persons = (props) => {
    const{persons, filterString} = props
    console.log('Filter String' ,filterString)

    // filtering names
    const filterName = (name) => {
        var filterString = getCurrentFilter()
        var re = new RegExp(filterString, 'i')
        console.log(re)
        // slice the name according to the search length
        var slicedName = name.slice(0, filterString.length)
        console.log(name, slicedName)
        if(slicedName.match(re)) {
            return true
        }
        else {
            return false
        }
    }

    const getCurrentFilter = () =>{
        return filterString
    }

    if (filterString.length === 0) {
        return(
            <div>
                {persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
            </div>
        )
    }
    else {
        var filteredPerson = persons.filter((person) => filterName(person.name))
        return(
            <div>
                {filteredPerson.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
            </div>
        )
    }
}

export default Persons