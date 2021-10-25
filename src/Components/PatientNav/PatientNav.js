import React,{ useContext } from 'react'
import './style.css'
import PatientCard from '../PatientCard/PatientCard'
import { PatientContext } from '../../Context/Patient';

const PatientNav = () => {
    const {patientList, setID} = useContext(PatientContext);

    return (
        <div className='side-nav-patients'>
            <div className='psn-head'>
                <span className="material-icons-outlined" onClick={()=>setID(()=>0)}>add</span>
                <h3>Patients</h3>
                <input 
                className='psn-search'
                placeholder='Search For Patient'/>
            </div>
            <div className='psn-scroll'>
                {
                    patientList.map((item) => (
                        <PatientCard 
                        id={item.id}  
                        name={item.name}
                        age={item.age}/>
                    ))
                }
            </div>
        </div>
    )
}

export default PatientNav
