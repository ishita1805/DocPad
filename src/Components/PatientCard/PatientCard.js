import React, { useContext } from 'react'
import './style.css'
import { PatientContext } from '../../Context/Patient';

const img = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"

const PatientCard = ({name, age, id}) => {

        const {setID, ID} = useContext(PatientContext);
        if(id === ID)
        return (
            <div className='psn-patient-active' onClick={()=>setID(()=>id)}>
                <div className='psn-patient-pic'>
                    <img src={img} alt='patient' />
                </div>
                <div className='psn-patient-info-active'>
                    <p>{name}</p>
                    <p>{age} yrs</p>
                </div>
            </div>
        )
        else 
        return (
            <div className='psn-patient' onClick={()=>setID(()=>id)}>
            <div className='psn-patient-pic'>
                <img src={img} alt='patient' />
            </div>
            <div className='psn-patient-info'>
                <p>{name}</p>
                <p>{age} yrs</p>
            </div>
        </div> 
        )
    }

export default PatientCard

