import React,{ useEffect, useState, useContext } from 'react'
import PrescriptionCard from '../PrescriptionCard/PrescriptionCard';
import { Redirect } from 'react-router-dom';
import { PatientContext } from '../../Context/Patient';
import './style.css'

const PatientData = () => {
    const [active, setActive] = useState(1);
    const [red, setRed] = useState(false);
    const { ID, patientList, patientData, setPatientData } = useContext(PatientContext);
    const img = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
    
    const newPrescription = () => {
        setRed(true);
    }

    useEffect(() => {
        if(ID !== 0) setPatientData(patientList.find((x) => x.id === ID));
    }, [ID])

    return (
        <>
            {red?<Redirect to='/prescription'/>:null}
            <div className='pc-header'>
                <div className='pch-head-in'>
                    <div className='pch-pp'>
                        <img src={img}/>
                    </div>
                    <div className='pch-label'>
                        <h1>{patientData.name}</h1>
                        <p>{patientData.gender}&ensp;•&ensp;{patientData.age} Yrs</p>
                        <p>{patientData.complaints}</p>
                    </div>
                </div>
                <button className='pch-cta' onClick={newPrescription}>
                    <span class="material-icons">note_add</span> 
                    &ensp;Add New 
                </button>
            </div>

            <div className='pc-nav'>
                <span className={active===1?'active-subnav':null} onClick={()=>setActive(1)}>Summary</span>
                <div className='pcn-divider'></div>
                <span className={active===2?'active-subnav':null} onClick={()=>setActive(2)}>Prescriptions</span>
                <div className='pcn-divider'></div>
                <span className={active===3?'active-subnav':null} onClick={()=>setActive(3)}>Tests</span>
            </div>
            
            <div className='pc-body'>
                {
                    active===1?
                    <>
                    <h3>Last Diagnosis</h3>
                    <div className='dia-info'>
                        <div className='dia-info-text'>
                        <h4>Asthma, Blood in cough ...</h4>
                        <p>Date: 21/07/2021</p>
                        </div>
                        <span className='material-icons'>arrow_circle_right</span>
                    </div>
                    <h3>General Information</h3>
                    <div className='sec-scroll-ver'>
                        <div className='gen-info'><b>Name</b> <span>{patientData.name}</span></div>
                        <div className='gen-info'><b>Age</b> <span>{patientData.age} yrs</span></div>
                        <div className='gen-info'><b>Gender</b> <span>{patientData.gender}</span></div>
                        <div className='gen-info'><b>Number</b> <span>{patientData.number}</span></div>
                        <div className='gen-info'><b>Presenting Complaints</b> <span>{patientData.complaints}</span></div>
                        <div className='gen-info'><b>Medical History</b> <span>{patientData.history}</span></div>
                        <div className='gen-info'><b>Email</b> <span>{patientData.email}</span></div>
                    </div>
                    </>:
                    null
                }
                {
                    active===2?
                    <>
                    <h3>All Prescriptions</h3>
                    <div className='pre-card-grid'>
                        <PrescriptionCard/>
                        <PrescriptionCard/>
                        <PrescriptionCard/>
                        <PrescriptionCard/>
                        <PrescriptionCard/>
                    </div>
                    </>:
                    null
                }
                {
                    active===3?
                    <h3>Test Graphs</h3>:
                    null
                }
            </div>

        </>
    )
}

export default PatientData
