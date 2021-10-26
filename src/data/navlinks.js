import React from 'react'

const navlinks = [
    {
        to:'/',
        icon:<span className="material-icons-outlined">house</span>,
        label:<>&ensp; Home</>
    },
    {
        to:'/patients',
        icon:<span className="material-icons-outlined">group</span>,
        label:<>&ensp; Patients</>
    },
    {
        to:'/prescription',
        icon:<span className="material-icons-outlined">description</span>,
        label:<>&ensp;Prescription</>
    },
    {
        to:'/taskmanager',
        icon:<span className="material-icons-outlined">event_note</span>,
        label:<>&ensp;Task Manager</> 
    },
    {
        to:'/profile',
        icon:<span className="material-icons-outlined">account_circle</span>,
        label:<>&ensp; Profile</>
    },
    {
        to:'/settings',
        icon:<span className="material-icons-outlined">settings</span>,
        label:<>&ensp; Settings</>
    },
]

export default navlinks;