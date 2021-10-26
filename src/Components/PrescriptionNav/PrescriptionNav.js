import React,{ useContext } from 'react'
import './style.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { PatientContext } from '../../Context/Patient';
import data from '../../data/tempPatientsList'

const PrescriptionNav = () => {
    const { patientList, setID, presciptionID, setPrescriptionID } = useContext(PatientContext);

    const newPatient = () => {}

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

    return (
        <div className='side-nav-pres'>
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
                    options={data}
                    renderInput={(params) => <TextField {...params} sx={{ color: 'text.active'}} label="Patient Name" />}
            />
            </ThemeProvider>
            <div className='prsn-deets'>
                <p><b>Age</b></p>
                <p><b>Gender</b></p>
                <p><b>Medical History</b></p>
                <p><b>Presenting Complaints</b></p>
            </div>
        </div>
    )
}

export default PrescriptionNav
