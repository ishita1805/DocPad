import React from 'react'
import './style.css'

const HomeActionCard = ({label, num, icon,onClick}) => {
    return (
        <div className='hac' onClick={onClick}>
            <span className='material-icons'>{icon}</span>
            &emsp;
            <p>
                {label}
                <br/>
                <b>{num}</b>
            </p>
        </div>
    )
}

export default HomeActionCard
