import React, { createContext, useState } from 'react'
import data from '../data/tempPatientsList'
const PatientContext = createContext();


const PatientProvider = ({ children }) => {
    
    const [ID, setID] = useState(1);
    const [patientList, setPatientList] = useState(data);

    return (
        <PatientContext.Provider value={{ ID, patientList, setPatientList, setID }}>
            {children}
        </PatientContext.Provider>
    )
}

export { PatientContext, PatientProvider } 