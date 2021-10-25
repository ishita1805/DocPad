import React from 'react'
import './style.css'

const PrescriptionCard = () => {
    return (
        <div className='dia-info-full'>
            <div>
            <h4>Complaints: Asthma, Blood in cough ...</h4>
            <h4>Diagnosis: Asthaline, CT Scan ...</h4>
            <p>Date: 21/07/2021</p>
            </div>
            <span className='material-icons'>arrow_circle_right</span>
        </div>
    )
}

export default PrescriptionCard
