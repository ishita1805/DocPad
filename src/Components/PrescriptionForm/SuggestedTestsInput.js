import React,{ useState} from 'react'
import options from '../../data/tempPatientsList'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';

const SuggestedTestsInput = ({ control, name, label }) => {

    const filter = createFilterOptions();
    const [value, setValue] = useState(null);

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


    //     <Autocomplete
    //   multiple
    //   value={value}
    //   onChange={(event, newValue) => {
    //     if (typeof newValue === "string") {
    //       setValue({
    //         title: newValue
    //       });
    //     } else if (newValue && newValue.inputValue) {
    //       // Create a new value from the user input
    //       setValue({
    //         title: newValue.inputValue
    //       });
    //     } else {
    //       setValue(newValue);
    //     }
    //   }}
    //   filterOptions={(options, params) => {
    //     const filtered = filter(options, params);

    //     const { inputValue } = params;
    //     // Suggest the creation of a new value
    //     const isExisting = options.some(
    //       (option) => inputValue === option.title
    //     );
    //     if (inputValue !== "" && !isExisting) {
    //       filtered.push({
    //         inputValue,
    //         title: `Add "${inputValue}"`
    //       });
    //     }
    //     return filtered;
    //   }}
    //   options={top100Films}
    //   getOptionLabel={(option) => {
    //     // Value selected with enter, right from the input
    //     if (typeof option === "string") {
    //       return option;
    //     }
    //     // Add "xxx" option created dynamically
    //     if (option.inputValue) {
    //       return option.inputValue;
    //     }
    //     // Regular option
    //     return option.title;
    //   }}
    //   renderOption={(props, option) => <li {...props}>{option.title}</li>}
    //   sx={{ width: 300 }}
    //   freeSolo
    //   renderInput={(params) => (
    //     <TextField {...params} label="Free solo with text demo" />
    //   )}
    // />
    )
}

export default SuggestedTestsInput
