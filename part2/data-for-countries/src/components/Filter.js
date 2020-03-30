import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowDetails from './ShowDetails'

const Filter = (props) => {
    console.log(props)
    const [countryData, setcountryData] = useState([])
    var filteredCountry = []

    // fetch data form server
    const hook = () => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            console.log(response.data)
            setcountryData(response.data)
        })
    }
    // useEffect take two input, the effect function and how often the function is run 
    // Empty array means render the effect only at the beginning 
    useEffect(hook, [])

    // handle show button click
    /*const handleShowButtonClick = (event) => {
        console.log('Show button clicked from ', event.target.id)
        console.log(filteredCountry[0])
        setShButton(true)
        
    }*/

    const getCurrentFilter = () =>{
        return props.searchVal
    }

    // filtering names
    const filterName = (name) => {
        var filterString = getCurrentFilter()
        var re = new RegExp(filterString, 'i')
        console.log(re)
        // If we want to match only the beginning of the string, we need to slice it
        /*  slice the name according to the search length
            var slicedName = name.slice(0, filterString.length)
            console.log(name, slicedName)*/
        // Otherwise regex match will find the string match anywhere in the string
        if(name.match(re)) {
            return true
        }
        else {
            return false
        }
    }
    
    // Check for empty search string
    if (props.searchVal.length === 0) {
        filteredCountry = countryData
    }
    else {
       filteredCountry = countryData.filter(country => filterName(country.name))
    }
    console.log('FilteredCountry', filteredCountry)
    console.log(props.shButton.state)
    console.log(props.shButton.country)

    if (props.shButton.state){
        var showCountry= filteredCountry.filter(country => country.name === props.shButton.country)
        console.log(showCountry)
        return(
            <div>
                <ShowDetails country={showCountry[0]} />
            </div>
        )
    }
    else{
    if (filteredCountry.length > 10) {
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (filteredCountry.length < 10 && filteredCountry.length > 1){
        return(
            <div>
                {filteredCountry.map(country => 
                <div key={country.name}> 
                    {country.name}
                    <button id={country.name} onClick={props.handleShowButtonClick} >
                        show
                    </button>  
                </div>   
                )}
            </div>
        )
    }
    else if (filteredCountry.length === 1) {
        return(
            <div>
                <ShowDetails country={filteredCountry[0]} />
            </div>
        )
    }
    else {
        return(
            <div>

            </div>
        )
    }
    }
}

export default Filter