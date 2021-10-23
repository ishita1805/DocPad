import React from 'react'
import './style.css'
import PatientCard from '../PatientCard/PatientCard'

const PatientNav = () => {
    return (
        <div className='side-nav-patients'>
            <div className='psn-head'>
                <span className="material-icons-outlined">add</span>
                <h3>Patients</h3>
                <input 
                className='psn-search'
                placeholder='Search For Patient'/>
            </div>
            <div className='psn-scroll'>
                <PatientCard active={true}/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
            </div>
        </div>
    )
}

export default PatientNav
