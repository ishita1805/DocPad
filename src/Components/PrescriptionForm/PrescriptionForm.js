import React,{ useState, useContext } from 'react'
import './style.css'
import Box from '@mui/material/Box';
import {Redirect} from 'react-router-dom'; 
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MultiAutoComplete from './MultiAutoComplete';
import MultilineTextInput from './MultilineTextInput';
import KeyValueInput from './KeyValueInput';
import { useForm } from "react-hook-form";
import options from '../../data/tempTest'
import MedicationInput from './MedicationInput';
import { PatientContext } from '../../Context/Patient'


const PrescriptionForm = () => {
    const {setViewPrescription, ID } = useContext(PatientContext);
    const [red, setRed] = useState(false);
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        if(ID === 0) alert('please select a patient');
        else {
            // API to create prescription for the selected ID
            // store prescription in a global state
            setViewPrescription(data);
            // redirect to view prescription page
            setRed(true);
        } 
    }

    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#837E98',
                dark: '#002884',
                contrastText: '#fff',
            },
        },
    });

    return (
        <div className='prcontainer-col'>
            {red?<Redirect to='/prescription-view'/>:null}
            <ThemeProvider theme={theme}>
                <Box component="form" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '100% !important',
                    '& .MuiTextField-root': { m: '1vh 0', width: '100% !important', },
                    '& .MuiAutocomplete-root': { m: '1vh 0', width: '100% !important', },
                    '& .MuiButton-root': { m: '1vh 0' },
                }}>

                    <p>Complaints</p>
                    <MultilineTextInput name="complaints" control={control} label='Patient Complaints'/>
                   
                    <p>Findings</p>
                    <KeyValueInput options={options} name="findings" control={control} label1='Finding' label2='Value'/>
                    
                    <p>Investigations</p>
                    <KeyValueInput options={options} name="investigations" control={control} label1='Investigation' label2='Value'/>

                    <p>Medication</p>
                    <MedicationInput control={control}/>
                    
                    <p>Suggested Tests</p>
                    <MultiAutoComplete options={options} name='tests' label='Suggested Tests' control={control}/>
                    
                    <p>Diagnosis</p>
                    <MultilineTextInput name="diagnosis" label="Your Diagnosis" control={control}/>

                    <br/>
                    <Button onClick={handleSubmit(onSubmit)} variant='contained' size='large'>Create Prescription</Button>
                
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default PrescriptionForm
