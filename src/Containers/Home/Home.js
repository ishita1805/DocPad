import React from 'react'
import Highlight from '../../Components/Highlight/Highlight'
import './style.css'

const Home = () => {
    return (
        <>
            <h1>Hi Dr. Shri Ram,</h1>
            <p className='subtitle'>
               You have <Highlight>32 patients</Highlight> and <Highlight>40 prescriptions</Highlight> this month
            </p>
            <div className=''></div>
         </>     
    )
}

export default Home
