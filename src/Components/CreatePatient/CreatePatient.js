import React, { useContext } from 'react'
import './style.css'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Controller, useForm } from "react-hook-form";
import { PatientContext } from '../../Context/Patient';


const CreatePatient = () => {
    const { setID, patientList, setPatientList } = useContext(PatientContext)
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        data.id=6;
        setPatientList([data, ...patientList]);
        setID(11);
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
        <div className='create-patient'>
            <p>Create A New Patient</p>
            <ThemeProvider theme={theme}>
                <Box component="form" sx={{
                    '& .MuiTextField-root': { m: '1vh 2.5%', width: '45%' },
                    '& .MuiButton-root': {
                        m: '1vh 2.5%',
                        width: '45%',
                        background: 'linear-gradient(-90deg, rgba(244,144,161,1) 0%, rgba(248,176,129,1) 100%)',
                        boxShadow: 'none',
                    },
                }}>
                    <Controller
                        name="name"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextField label="Name" type="text" onChange={onChange} value={value} />
                        )}
                    />

                    <Controller
                        name="age"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextField label="Age" type="number" sx={{ m: '1.2vh 2.5%', width: '20% !important' }} onChange={onChange} value={value} />
                        )}
                    />


                    <Controller
                        name="gender"
                        control={control}
                        render={({ onChange, value }) => (
                            <FormControl sx={{ m: '1.2vh 2.5%', width: '20%' }}>
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select labelId="gender-label" id="gender" label="Gender" onChange={onChange} value={value}>
                                    <MenuItem value='Male'>Male</MenuItem>
                                    <MenuItem value='Female'>Female</MenuItem>
                                    <MenuItem value='Other'>Other</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />


                    <Controller
                        name="number"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextField label="Number" type="number" onChange={onChange} value={value} />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextField label="Patient Email" type="text" onChange={onChange} value={value} />
                        )}
                    />

                    <Controller
                        name="complaints"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextField label="Presenting Complaints" multiline rows={3} onChange={onChange} value={value} />
                        )}
                    />

                    <Controller
                        name="history"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextField label="Medical History" multiline rows={3} onChange={onChange} value={value} />
                        )}
                    />

                    <Button onClick={handleSubmit(onSubmit)} variant="contained" size="medium">Create Patient</Button>

                </Box>
            </ThemeProvider>
        </div>
    )
}

export default CreatePatient
