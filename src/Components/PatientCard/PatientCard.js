import React from 'react'
import './style.css'

const img = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"

const PatientCard = ({active}) => {
        if(active)
        return (
            <div className='psn-patient-active'>
                <div className='psn-patient-pic'>
                    <img src={img} alt='patient' />
                </div>
                <div className='psn-patient-info-active'>
                    <p>Ishita Kabra</p>
                    <p>21 yrs</p>
                </div>
            </div>
        )
        else 
        return (
            <div className='psn-patient'>
            <div className='psn-patient-pic'>
                <img src={img} alt='patient' />
            </div>
            <div className='psn-patient-info'>
                <p>Ishita Kabra</p>
                <p>21 yrs</p>
            </div>
        </div> 
        )
    }

export default PatientCard

