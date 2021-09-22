import React from 'react'
import Background from '../../Components/Background/Background'
import Highlight from '../../Components/Highlight/Highlight'
import PatientCard from '../../Components/PatientCard/PatientCard'
import './style.css'

const Home = () => {
    return (
       <Background>
            <h1>Hi Dr. Shri Ram,</h1>
            <p className='subtitle'>
               You have <Highlight>32 patients</Highlight> and <Highlight>40 prescriptions</Highlight> this month
            </p>

            <div className='patients-header'>
                <h3>Recent Patients</h3>
                <div className='filter-button'>
                    <span class="material-icons-outlined">filter_alt</span>
                    <h4>Filters</h4>
                </div>
            </div>

            <div className='patients-cont'>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
                <PatientCard/>
            </div>

            <h4 className='paginate'>
                <span className='material-icons-outlined'>chevron_left</span> <span>Prev</span> 
                &emsp;&emsp;
                <span>Next</span> <span className='material-icons-outlined'>chevron_right</span>
            </h4>
            
       </Background>
    )
}

export default Home
