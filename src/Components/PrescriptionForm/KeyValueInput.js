import React, { useState } from 'react'
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import './style.css'

const KeyValueInput = ({ name, options, label1, label2, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ onChange, value }) => (
                <KeyValueComponent options={options} onChange={onChange} value={value} label1={label1} label2={label2} />
            )}
            onChange={([, data]) => data}
        />
    )
}

export default KeyValueInput


const KeyValueComponent = ({ options, onChange, value = [], label1, label2 }) => {

    const [val, setVal] = useState({ key: null, value: null });

    const handleKeyChange = (dt) =>  {
        if(dt && dt.label) setVal({ ...val, key: dt.label })
    }
    const handleValChange = (e) => setVal({ ...val, value: e.target.value })

    const addInputValues = () => {
        onChange([...value, val]);
        setVal({ key: '', value: '' });
    }
    
    const removeItem = (it) => {
        onChange(value.filter((x) => x !== it))
    }

    const handleUniqueKey = (e) => {
        setVal({ ...val, key: e.target.value })
    }

    return (
        <>
        <div className='key-value-inp'>
            <Autocomplete
            freeSolo
            value={val.key}
            options={options}
            renderInput={(params) => <TextField {...params} onChange={(e)=>handleUniqueKey(e)} label={label1} value={val.key}/>}
            onChange={(_, data) => handleKeyChange(data)}
            />
            &emsp;
            <TextField 
            label={label2} 
            onChange={(e) => { handleValChange(e) }} 
            value={val.value} />
            &emsp;
            <Button 
            onClick={addInputValues} 
            variant='contained' 
            size='large'>
                Add
            </Button>
        </div>
        <div className='key-value-table'>
            {
                value.map((item) => (
                    <div className='key-value-item'>
                    <div className='inner-kvi'>{item.key}</div>&emsp;
                    <div className='inner-kvi'>{item.value}</div>&emsp;
                    <Button onClick={()=>removeItem(item)}><span className='material-icons-outlined'>close</span></Button>
                    </div>
                ))
            }
        </div>
        </>
    )
}