import React from 'react'
import './style.css'

const PatientCard = () => {
    return (
        <div className='patien-card'>
            <div className='patient-info'>
                <h3>Ishita Kabra</h3>
                <h4>14 Prescriptions</h4>
            </div>
            <div className='patient-info-2'>
                <p>Female</p> &emsp;
                <p>21</p> &emsp;
                <p>Last Prescription: 02 Jun, 2021</p>
            </div>
            
        </div>
    )
}

export default PatientCard
