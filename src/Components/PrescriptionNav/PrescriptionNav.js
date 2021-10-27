import React,{ useState, useContext } from 'react'
import './style.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { PatientContext } from '../../Context/Patient';

const PrescriptionNav = () => {
    const [red,setRed] = useState(false);
    const { patientList, 
            setID, 
            patientData, 
            setPatientData, 
            ID } = useContext(PatientContext);

    const newPatient = () => {
        setID(0);
        setPatientData({
            id:'',
            name:'',
            label:'',
            age:null,
            gender:'',
            number: null,
            email:'',
            complaints:'',
            history:''
        });
        setRed(true);
    }

    const theme = createTheme({
        palette: {
            mode: 'dark',
            background: {
              paper: '#08012b',
            },
            text: {
              primary: '#a69fc2',
              secondary:'#cec9df'
            },
            primary: {
                main: '#a69fc2'
            }
        }      
    });

    const changePatient = (data) => {
        if(data && data.id) {
            setPatientData(()=>data);
            setID(data.id);
        }
        else {
            setID(0);
            setPatientData({
                id:'',
                name:'',
                label:'',
                age:null,
                gender:'',
                number: null,
                email:'',
                complaints:'',
                history:''
            })
        }
    }

    return (
        <div className='side-nav-pres'>
            {red?<Redirect to='/patients'/>:null}
            <div className='prsn-head'>
                <span className="material-icons" onClick={newPatient}>person_add</span>
                <h3>Patient Details</h3>
            </div>
            <ThemeProvider theme={theme}>
            <Autocomplete
                    sx={{ 
                        m: '1vh 2vh',
                        borderWidth: '1px',
                        '& .MuiTextField-root': {
                            background: '#090131',
                            borderRadius:'5px',
                        }
                    }}
                    onChange={(_,data)=>changePatient(data)}       
                    defaultValue={ID===0?null:patientData} 
                    options={patientList}
                    renderInput={(params) => 
                    <TextField 
                    {...params} 
                    sx={{ color: 'text.active'}} 
                    label="Patient Name" />}
            />
            </ThemeProvider>
            <div className='prsn-deets'>
                <p><b>Age</b><span>{patientData.age}</span></p>
                <p><b>Gender</b><span>{patientData && patientData.gender}</span></p>
                <p>
                    <b>Medical History</b>
                    <span>{patientData && patientData.history}</span>
                </p>
                <p>
                    <b>Presenting Complaints</b>
                    <span>{patientData && patientData.complaints}</span>
                </p>
            </div>
        </div>
    )
}

export default PrescriptionNav
