import React from 'react'
import Highlight from '../../Components/Highlight/Highlight'
import HomeActionCard from '../../Components/HomeActionCard/HomeActionCard'
import './style.css'

const Home = () => {
    return (
        <div className='home-container'>

            <h1>Hi Dr. Shri Ram,</h1>
            <p className='subtitle'>
                You have <Highlight>32 patients</Highlight> and <Highlight>40 prescriptions</Highlight> this month
            </p>

            <div className='home-header'>
                <HomeActionCard
                    icon='format_list_bulleted'
                    label='New Prescription'
                    num='500'
                    onClick={() => { }} />
                <HomeActionCard
                    icon='person_add'
                    label='Create Patient'
                    num='100'
                    onClick={() => { }} />
                <HomeActionCard
                    icon='add_task'
                    num='10'
                    label='Add To Schedule'
                    onClick={() => { }} />
            </div>

            <div className='home-header'>
                <div className='patient-search'>
                    <div className='ps-box'>
                        <span className='material-icons'>search</span>
                        <input placeholder='Search By Patient Name' />
                        <span className='material-icons'>close</span>
                    </div>
                    <div className='ps-result'>
                        <h3>Recent Patients</h3>
                        <p>Ainkit Dutta <span className='material-icons-outlined'>arrow_forward</span></p>
                        <p>Abhishekh Rai <span className='material-icons-outlined'>arrow_forward</span></p>
                        <p>Anjali Bose <span className='material-icons-outlined'>arrow_forward</span></p>
                        <p>Nikhil Sharma <span className='material-icons-outlined'>arrow_forward</span></p>
                        <p>Rishi Singh <span className='material-icons-outlined'>arrow_forward</span></p>
                        <br />
                    </div>
                </div>

                <div className='tasks'>
                    <h3>Today's Schedule</h3>
                </div>
            </div>


        </div>
    )
}

export default Home
