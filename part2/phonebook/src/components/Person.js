import React from 'react'

const Person = (props) => {
    const{person, deleteButton} = props
        return(
            <div>
                {person.name} {person.number} 
                <button onClick={deleteButton}> delete</button>
            </div>
        )
}

export default Person