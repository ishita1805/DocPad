import React from 'react'
import './style.css'

const DailyCalendar = () => {
    const hours = [
        {
            time:"12:00 AM",
            event: true,
            event_name: 'Binge Watch Netflix',
            bg: 'rgb(238, 30, 65)'
        },
        {
            time:"1:00 AM",
            event: true,
            event_name: 'Gym',
            bg: 'rgb(30, 144, 238)'
        },
        {
            time:"2:00 AM",
            event: false,
        },
        {
            time:"3:00 AM",
            event: false,
        },
        {
            time:"4:00 AM",
            event: false,
        },
        {
            time:"5:00 AM",
            event: false,
        },
        {
            time:"6:00 AM",
            event: false,
        },
        {
            time:"7:00 AM",
            event: false,
        },
        {
            time:"8:00 AM",
            event: false,
        },
        {
            time:"9:00 AM",
            event: false,
        },
        {
            time: "10:00 AM",
            event: false,
        },
        {
            time:"11:00 AM",
            event: false,
        },
        {
            time: "12:00 PM",
            event: false,
        },
        {
            time: "1:00 PM",
            event: false,
        },
        {
            time:"2:00 PM",
            event: false,
        },
        {
            time: "3:00 PM",
            event: false,
        },
        {
            time:"4:00 PM",
            event: false,
        },
        {
            time:"5:00 PM",
            event: false,
        },
        {
            time:  "6:00 PM",
            event: false,
        },
        {
            time:"7:00 PM",
            event: false,
        },
        {
            time: "8:00 PM",
            event: false,
        },
        {
            time: "9:00 PM",
            event: false,
        },
        {
            time:"10:00 PM",
            event: false,
        },
        {
            time: "11:00 PM",
            event: false,
        }
    ]

    return (
        <div className='calendar-daily'>
           {
               hours.map((item) => (
                    <p> 
                       <div>{item.time}</div>
                       <span style={item.bg?{backgroundColor:item.bg}:null} className={item.event===true?'calendar-event':null}>
                           {item.event_name?item.event_name:""}
                        </span>
                    </p>
               ))
           }
        </div>
    )
}

export default DailyCalendar
