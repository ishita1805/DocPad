import React, { useState } from 'react'
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import options from '../../data/tempTest'
import './style.css'

const MedicationInput = ({ control }) => {
    return (
        <Controller
            name='medications'
            control={control}
            render={({ onChange, value }) => (
                <MedicationComponent
                    onChange={onChange}
                    value={value} />
            )}
            onChange={([, data]) => data}
        />
    )
}

export default MedicationInput

const MedicationComponent = ({ onChange, value = [] }) => {
    const [val, setVal] = useState({
        type: '',
        name: '',
        freq: '',
        days: '',
        food: ''
    })

    const addInputValues = () => {
        onChange([...value, val]);
        setVal({
            type: '',
            name: '',
            freq: '',
            days: '',
            food: ''
        })
    }

    const handleUniqueName = (e) => {
        setVal({ ...val, name: e.target.value })
    }

    const handleNameChange = (dt) =>  {
        if(dt && dt.label) setVal({ ...val, name: dt.label })
    }

    const removeItem = (it) => {
        onChange(value.filter((x) => x !== it))
    }

    return (
        <>
        <div className='key-value-inp'>
            <FormControl sx={{ m: '0', p: '0', width: '30%' }}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                    labelId="type-label"
                    label="Type"
                    name='type'
                    onChange={(e) => setVal({ ...val, type: e.target.value })}
                    value={val.type}
                >
                    <MenuItem value='Tab'>Tab</MenuItem>
                    <MenuItem value='Capsule'>Capsule</MenuItem>
                    <MenuItem value='Injection'>Injection</MenuItem>
                    <MenuItem value='Syrup'>Syrup</MenuItem>
                </Select>
            </FormControl>
            <Autocomplete
            freeSolo
            value={val.name}
            options={options}
            renderInput={(params) => 
            <TextField {...params} onChange={(e)=>handleUniqueName(e)} label='Name' value={val.name}/>}
            onChange={(_, data) => handleNameChange(data)}
            />&emsp;

            <FormControl sx={{ m: '1vh 0', width: '60%' }}>
                <InputLabel id="freq-label">Frequency</InputLabel>
                <Select
                    name='frequency'
                    labelId="freq-label"
                    label="Frequency"
                    onChange={(e) => setVal({ ...val, freq: e.target.value })}
                    value={val.freq}
                >
                    <MenuItem value='Once A Day'>Once A Day</MenuItem>
                    <MenuItem value='Twice A Day'>Twice A Day</MenuItem>
                    <MenuItem value='Thrice A Day'>Thrice A Day</MenuItem>
                    <MenuItem value='4 Times A Day'>4 Times A Day</MenuItem>
                </Select>
            </FormControl>&emsp;

            <FormControl sx={{ m: '1vh 0', width: '30%' }}>
                <TextField
                    label='Days'
                    onChange={(e) => setVal({ ...val, days: e.target.value })}
                    value={val.days}
                />
            </FormControl>&emsp;


            <FormControl sx={{ m: '1vh 0', width: '70%' }}>
                <InputLabel id="food-label">Relation With Food</InputLabel>
                <Select
                    name='food'
                    labelId="food-label"
                    label="Relation With Food"
                    onChange={(e) => setVal({ ...val, food: e.target.value })}
                    value={val.food}
                >
                    <MenuItem value='Before Meals'>Before Meals</MenuItem>
                    <MenuItem value='After Meals'>After Meals</MenuItem>
                    <MenuItem value='With Meals'>With Meals</MenuItem>
                </Select>
            </FormControl>&emsp;

            <Button onClick={addInputValues} variant='contained' size='large'>
                Add
            </Button>
        </div>
        <div className='key-value-table'>
            {
                value.map((item) => (
                    <div className='key-value-item'>
                    <div className='inner-kvi-30'>{item.type}</div>
                    <div className='inner-kvi-100'>{item.name}</div>&emsp;
                    <div className='inner-kvi-60'>{item.freq}</div>&emsp;
                    <div className='inner-kvi-30'>{item.days}</div>&emsp;
                    <div className='inner-kvi-70'>{item.food}</div>&emsp;
                    <Button onClick={()=>removeItem(item)}><span className='material-icons-outlined'>close</span></Button>
                    </div>
                ))
            }
        </div>
        </>
    )
}