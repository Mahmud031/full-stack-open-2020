import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ShowDetails = (props) => {
    const [weather, setWeather] = useState([])
    const {country} = props
    console.log('From show details', country.name)
    // get the weather data
    const api_key = process.env.REACT_APP_API_KEY
    // variable api_key has now the value set in startup
    console.log(api_key)
    const params =
        {
          access_key: api_key,
          query: country.capital
        }

    const hook = () => {
        axios
            .get('http://api.weatherstack.com/current' , {params})
            .then(response => {
                console.log(response.data)
                setWeather(response.data.current)
            })
    }
    useEffect(hook, [])

    return (
        <div>
            <h1>
                {country.name}
            </h1>
            capital {country.capital}
            <br />
            population {country.population}
            <h2>
                Spoken languages
            </h2>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            <br />
            <img src={country.flag} height="120" width="120"></img>
            <h2>
                Weather in {country.capital}
            </h2>
            <div><strong>temperature: </strong>{weather.temperature} celcius </div>
            <img src={weather.weather_icons}></img>
            <div><strong>wind: </strong>{weather.wind_speed} mph direction {weather.wind_dir} </div>
            
        </div>
    )
}

export default ShowDetails