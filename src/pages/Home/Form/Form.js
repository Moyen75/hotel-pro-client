import { MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const dates = ['Saturday', 'sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const hours = ['10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm', '08pm', '09pm', '10pm']
const persons = ['1person', '2persons', '3persons', '4persons', '5persons', '6persons', '7persons', '8persons', "10+persons"]

const Form = () => {
    const [date, setDate] = React.useState('Saturday');
    const [hour, setHour] = React.useState('10am');
    const [person, setPerson] = React.useState('1person');
    const [name,setName]=React.useState('')
    const [number,setNumber]=React.useState('')

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleHourChange = (event) => {
        setHour(event.target.value);
    };
    const handlePersonChange = (event) => {
        setPerson(event.target.value);
    };

    const handleFullName=(e)=>{
        setName(e.target.value)
    }
    const handlePhoneNumber=(e)=>{
        setNumber(e.target.value)
    }
    return (
        <Box sx={{ paddingTop: '10px' }}>
            <form >
                <TextField
                    id="standard-basic"
                    variant="standard"
                    select
                    sx={{ width: '35%', marginX: '15px' }}
                    label="Select Day"
                    value={date}
                    onChange={handleDateChange}
                >
                    {dates.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-basic"
                    variant="standard"
                    select
                    sx={{ width: '35%', marginX: '15px' }}
                    type='time'
                    label="Select Time"
                    value={hour}
                    onChange={handleHourChange}
                >
                    {hours.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-basic"
                    label="Full Name"
                    onChange={handleFullName}
                    sx={{ width: '35%', marginX: '15px' }}
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="Phone Number"
                    onChange={handlePhoneNumber}
                    sx={{ width: '35%', marginX: '15px' }}
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    variant="standard"
                    select
                    sx={{ width: '35%', margin: '15px' }}
                    label="Select person"
                    value={person}
                    onChange={handlePersonChange}
                >
                    {persons.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>

                <input
                    type='submit'
                    value='submit'
                    className='booking-input'
                />
            </form>
        </Box>
    );
};

export default Form;