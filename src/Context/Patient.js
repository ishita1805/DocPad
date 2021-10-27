import React, { createContext, useState } from 'react'
import data from '../data/tempPatientsList'
const PatientContext = createContext();


const PatientProvider = ({ children }) => {
    
    const [ID, setID] = useState(0);
    const [patientList, setPatientList] = useState(data);
    const [viewPrescription,setViewPrescription] = useState(null)
    const [patientData, setPatientData] = useState({
        id:'',
        name:'',
        label:'',
        age:null,
        gender:'',
        number: null,
        email:'',
        complaints:'',
        history:''
    });

    return (
        <PatientContext.Provider value={{ ID, patientList,patientData,viewPrescription, setViewPrescription, setPatientData, setPatientList, setID }}>
            {children}
        </PatientContext.Provider>
    )
}

export { PatientContext, PatientProvider } 