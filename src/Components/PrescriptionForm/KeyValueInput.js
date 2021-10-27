import React, { useState } from 'react'
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css'

const KeyValueInput = ({ name, label1, label2, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ onChange, value }) => (
                <KeyValueComponent onChange={onChange} value={value} label1={label1} label2={label2} />
            )}
        />
    )
}

export default KeyValueInput


const KeyValueComponent = ({ onChange, value = [], label1, label2 }) => {

    const [val, setVal] = useState({ key: null, value: null });
    const handleKeyChange = (e) => setVal({ ...val, key: e.target.value })
    const handleValChange = (e) => setVal({ ...val, value: e.target.value })
    const addInputValues = () => {
        onChange([...value, val]);
        setVal({ key: '', value: '' })
    }
    const removeItem = (it) => {
        onChange(value.filter((x) => x !== it))
    }

    return (
        <>
        <div className='key-value-inp'>
            <TextField 
            label={label1} 
            onChange={(e) => { handleKeyChange(e) }} 
            value={val.key} />
            &emsp;
            <TextField 
            label={label2} 
            onChange={(e) => { handleValChange(e) }} 
            value={val.value} />
            &emsp;
            <Button 
            onClick={addInputValues} 
            variant='contained' 
            size='medium'>
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