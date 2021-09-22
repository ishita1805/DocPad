import React from 'react'
import './style.css'

const Highlight = ({children}) => {
    return (
        <span className='highlight-container'>
            {children}
        </span>
    )
}

export default Highlight
