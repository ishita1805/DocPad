import React,{ useContext } from 'react'
import PatientNav from '../../Components/PatientNav/PatientNav'
import './style.css'
import { PatientContext } from '../../Context/Patient';
import CreatePatient from '../../Components/CreatePatient/CreatePatient';
import PatientData from '../../Components/PatientData/PatientData';

const Patient = () => {
    const {ID} = useContext(PatientContext);
    return (
        <div className='patient-container'>
            <PatientNav/>
            {ID === 0?  
            <div className='pcontainer-col patient-add'>
                <h1>Hey Doc, How's it going?</h1>
                <p>DocPad helps you create and manage patient records and prescriptions with ease</p>
                <CreatePatient/>
            </div>:
            <div className='pcontainer-col'>
                <PatientData/>
            </div>
            }
        </div>
    )
}

export default Patient
