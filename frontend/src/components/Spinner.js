import React from 'react'
import spinner from './ajax-loader.gif'

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="loading" />
        </div>
    )
}

export default Spinner
