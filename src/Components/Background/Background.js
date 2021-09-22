import React from 'react'
import './style.css'

const Background = ({children,...props}) => {
    return (
        <div className='content-container'>
            {children}
        </div>
    )
}

export default Background
