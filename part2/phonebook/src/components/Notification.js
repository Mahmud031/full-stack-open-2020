import React from 'react'

const Notification = ({message, notificationType}) => {
    if (message === null || notificationType === null) {
        return null
    }
    if(notificationType === 'Notification'){
        return (
            <div>
                <p className='notification'>
                    {message}
                </p>
            </div>
        )
    }
    else if (notificationType === 'Error'){
        return (
            <div>
                <p className='error'>
                    {message}
                </p>
            </div>
        )
    }
}

export default Notification