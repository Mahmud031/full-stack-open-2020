import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const App = () => {
  const [searchVal, setSearchVal] = useState('')
  // shButton stands for showing the details from show button press
  const [shButton, setShButton] = useState({state:false, country: ''})
  const handleSearchChange = (event) =>{
    console.log(event.target.value)
    setSearchVal(event.target.value)
    setShButton(({state:false, country: ''}))
  }

  const handleShowButtonClick = (event) => {
    console.log('Show button clicked from ', event.target.id)
    setShButton(({state:true, country: event.target.id}))
    
}
  return(
    <div>
      find countries <input value={searchVal} onChange={handleSearchChange}/>
      <Filter searchVal={searchVal} handleShowButtonClick={handleShowButtonClick} shButton={shButton}  />
    </div>
  )
}

export default App;
