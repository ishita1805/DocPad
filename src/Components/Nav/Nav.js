import React,{ useState } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import navlinks from '../../data/navlinks'

const img = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"


const Nav = ({children, ...props}) => {
    const [showNav,setShowNav] = useState(true);
    return (
        <div className='nav-container'>

            <div className={showNav?`nav-bar`:`nav-bar-small`}>
                <div className='nav-profile-pic'>
                    <img src={img} alt='profile'/>
                </div>
                <div className='nav-links'>
                    {
                        navlinks.map(({to, icon, label}) => (
                            <NavLink to={to} exact className='nav-link' activeClassName='nav-link-active'>
                                {icon}
                                {showNav?label:null}
                            </NavLink>
                        ))
                    }
                </div>
                <div className='nav-footer'>
                    {showNav?`2021 © DocPad`:`DocPad`}
                </div>
            </div>



                   
            <span 
            class="material-icons-outlined nav-cursor"
            onClick={()=>setShowNav((showNav)=>!showNav)}>
                {showNav?`chevron_left`:`chevron_right`}
            </span>
       
            {children}
            
        </div>
    )
}

export default Nav
