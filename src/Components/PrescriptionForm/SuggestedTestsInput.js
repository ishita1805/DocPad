import React from 'react'
import options from '../../data/tempPatientsList'
import Autocomplete from '@mui/material/Autocomplete';
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';

const SuggestedTestsInput = ({ control, name, label }) => {

    return (
        <Controller
            render={({ onChange, ...props }) => (
                <Autocomplete
                    multiple
                    freeSolo
                    options={options}
                    renderInput={(params) => <TextField {...params} label={label} />}
                    onChange={(e, data) => onChange(data)}
                    {...props}
                />
            )}
            onChange={([, data]) => data}
            name={name}
            control={control}
        />
    )
}

export default SuggestedTestsInput
