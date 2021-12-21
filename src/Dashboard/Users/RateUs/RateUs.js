import { Box } from '@mui/system';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const RateUs = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [review, setReview] = useState('')
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleChange = e => {
        setReview(e.target.value)
    }
    const handleOnBlur = e => {
        setReview(e.target.value)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        const reviews = { value, review, userName: user.displayName, userEmail: user.email, photoUrl: user.photoURL }
        fetch('https://arcane-tor-66544.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    success()
                    navigate('/dashboard')
                }
            })
    }
    const success = () => {
        swal(
            'Thank you!',
            'for giving your valuable feedback!',
            'success'
        )
    }
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box>
                <Typography className='breakfast' variant='h3' sx={{ marginTop: "10px" }}>
                    Rate us
                </Typography>
                <Box
                    sx={{
                        width: 200,
                        marginTop: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                </Box>
                <Box>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Rate us"
                            multiline
                            onBlur={handleOnBlur}
                            minRows={4}
                            sx={{ width: '100%', marginY: '20px' }}
                            placeholder='Give us your feedback'
                            onBlur={handleChange}
                            variant="outlined"
                        />
                        <TextField type='submit' value="Rate Now"></TextField>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default RateUs;