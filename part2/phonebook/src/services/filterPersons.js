

// filtering names
const filterName = (name,filterString) => {
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

const filterAllPersons = (persons,filterString) => {
    return persons.filter((person) => filterName(person.name, filterString))
}

export default filterAllPersons