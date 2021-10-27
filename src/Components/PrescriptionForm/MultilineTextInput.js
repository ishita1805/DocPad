import React from 'react'
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';

const MultilineTextInput = ({ name, label, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ onChange, value }) => (
                <TextField label={label} multiline rows={3} onChange={onChange} value={value} />
            )}
        />
    )
}

export default MultilineTextInput
