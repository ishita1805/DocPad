import React from 'react'
import './style.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MultiAutoComplete from './MultiAutoComplete';
import MultilineTextInput from './MultilineTextInput';
import KeyValueInput from './KeyValueInput';
import { useForm } from "react-hook-form";
import options from '../../data/tempTest'
import MedicationInput from './MedicationInput';


const PrescriptionForm = () => {

    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
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

                    <p>Suggested Tests</p>
                    <MultiAutoComplete options={options} name='tests' label='Suggested Tests' control={control}/>
                    
                    <p>Diagnosis</p>
                    <MultilineTextInput name="diagnosis" label="Your Diagnosis" control={control}/>

                    <p>Medication</p>
                    <MedicationInput control={control}/>
                    
                    <br/>
                    <Button onClick={handleSubmit(onSubmit)} variant='contained' size='large'>Create Prescription</Button>
                
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default PrescriptionForm
