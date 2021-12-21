import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const Mcq = () => {
    const [match, setMatch] = useState([])
    const questions = [
        {
            title: 'Question No -1',
            options: [
                'rubby',
                'python',
                'java',
                'javascript'
            ],
            answer: 'c++',
            type: 'c++'
        },
        {
            title: 'Question No -2',
            options: [
                'rubby',
                'python',
                'java',
                'javascript'
            ],
            answer: 'c++',
            type: 'c++'
        },
        {
            title: 'Question No -3',
            options: [
                'rubby',
                'python',
                'java',
                'javascript'
            ],
            answer: 'react',
            type: 'javascript'
        },
        {
            title: 'Question No -4',
            options: [
                'rubby',
                'python',
                'java',
                'javascript'
            ],
            answer: 'react',
            type: 'javascript'
        },
        {
            title: 'Question No -5',
            options: [
                'rubby',
                'python',
                'java',
                'javascript'
            ],
            answer: 'rubby',
            type: 'python'
        },
        {
            title: 'Question No -6',
            options: [
                'rubby',
                'python',
                'java',
                'javascript'
            ],
            answer: 'rubby',
            type: 'python'
        }
    ]

    const handleOnClick = async (type) => {
        const matched = await questions.filter(q => q.type === type)
        setMatch(matched)
    }

    return (
        <div>
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                helperText="Please select your currency"
            >

                <MenuItem value='javascript'>
                    <button className='btn-mcq' onClick={() => handleOnClick('javascript')}>javascript</button>
                </MenuItem>
                <MenuItem value='python'>
                    <button className='btn-mcq' onClick={() => handleOnClick('python')}>python</button>
                </MenuItem>
                <MenuItem value='c++'>
                    <button className='btn-mcq' onClick={() => handleOnClick('c++')}>C++</button>
                </MenuItem>

            </TextField>
            {

                match && <Box>
                    {
                        match.map(q => <Box>
                            <Typography>
                                {q.title}
                            </Typography>
                            {
                                q?.options?.map(o => <label htmlFor="#"><input type='radio' /> {o}</label>)
                            }

                        </Box>)
                    }
                </Box>
            }
        </div>
    );
};

export default Mcq;