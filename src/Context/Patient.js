import React, { createContext, useState } from 'react'
import data from '../data/tempPatientsList'
const PatientContext = createContext();


const PatientProvider = ({ children }) => {
    
    const [ID, setID] = useState(0);
    const [prescriptionID, setPrescriptionID] = useState(0);
    const [patientList, setPatientList] = useState(data);

    return (
        <PatientContext.Provider value={{ ID, patientList, prescriptionID, setPrescriptionID, setPatientList, setID }}>
            {children}
        </PatientContext.Provider>
    )
}

export { PatientContext, PatientProvider } 