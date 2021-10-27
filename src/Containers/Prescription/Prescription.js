import React, { useContext } from 'react'
import PatientNav from '../../Components/PatientNav/PatientNav'
import './style.css'
import { PatientContext } from '../../Context/Patient';
import PrescriptionNav from '../../Components/PrescriptionNav/PrescriptionNav';
import PrescriptionForm from '../../Components/PrescriptionForm/PrescriptionForm';

const Prescription = () => {
    const { prescriptionID } = useContext(PatientContext);
    {/* prescriptionID to be made 0 after submission of prescription */}

    return (
        <div className='prescription-container'>
            <PrescriptionNav />
            <PrescriptionForm />
        </div>
    )
}

export default Prescription
