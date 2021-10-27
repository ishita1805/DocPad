import React from 'react'
import './style.css'
import PrescriptionNav from '../../Components/PrescriptionNav/PrescriptionNav';
import PrescriptionForm from '../../Components/PrescriptionForm/PrescriptionForm';

const Prescription = () => {

    return (
        <div className='prescription-container'>
            <PrescriptionNav />
            <PrescriptionForm />
        </div>
    )
}

export default Prescription
