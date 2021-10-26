import React, { useContext } from 'react'
import PatientNav from '../../Components/PatientNav/PatientNav'
import './style.css'
import { PatientContext } from '../../Context/Patient';
import PrescriptionNav from '../../Components/PrescriptionNav/PrescriptionNav';

const Prescription = () => {
    const { prescriptionID } = useContext(PatientContext);
    {/* prescriptionID to be made 0 after submission of prescription */}

    return (
        <div className='prescription-container'>
            <PrescriptionNav />
            <div className='pcontainer-col prescription-add'>
                <h1>Prescription Form Comes Here</h1>
            </div>
        </div>
    )
}

export default Prescription
