import { Box } from '@mui/system';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth'
import swal from 'sweetalert';
import { useNavigate } from 'react-router';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '800px',
    bgcolor: 'white',
    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    borderRadius: '5px',
    p: 4,
};

const OrderModal = ({ open, handleClose, match }) => {
    const total = parseFloat(match?.price) + 12;
    const { user } = useAuth();
    const userName = user.displayName;
    const userEmail = user.email;
    const status = 'pending'
    const paymentStatus = 'unpaid'
    const users = { userName, userEmail }
    const [userInfo, setUserInfo] = useState(users)
    const navigate = useNavigate()

    const handleUserInfo = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {  ...userInfo }
        newInfo[field] = value;
        setUserInfo(newInfo)
    }
    // console.log(userInfo)

    const handleOrderData = e => {
        // e.preventDefault()
        const allData={...userInfo, total, match, status,paymentStatus}
        fetch('https://arcane-tor-66544.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleClose()
                    success()
                    navigate('/breakfast')
                }
            })
    }
    const handleConfirmation = () => {
        handleOrderData()
    }
    const success = () => {
        swal(
            'Great job!',
            'Order placed successfully!',
            'success'
        )
    }
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {match && <Box>
                        <Grid container spacing={2}>

                            <Grid item xs={12} md={6}>
                                <Typography variant='h5' sx={{ color: 'gray' }}>
                                    Shipping
                                </Typography>
                                <form onSubmit={handleOrderData}>
                                    <TextField
                                        id="standard-basic"
                                        label='Phone Number'
                                        sx={{ width: '90%' }}
                                        onBlur={handleUserInfo}
                                        name='phone'
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label='City'
                                        sx={{ width: '90%' }}
                                        onBlur={handleUserInfo}
                                        name='city'
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label='District'
                                        onBlur={handleUserInfo}
                                        name='district'
                                        sx={{ width: '90%' }}
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label='Address'
                                        sx={{ width: '90%' }}
                                        onBlur={handleUserInfo}
                                        name='address'
                                        variant="standard"
                                        required
                                    />
                                    {/* <input className='submit' type='submit' value='Confirm Order' /> */}
                                </form>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant='h5' sx={{ color: 'gray' }}>
                                        Order Summary
                                    </Typography>
                                    <Box sx={{ padding: "1%", marginY: '10px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>
                                                Subtotal
                                            </Typography>
                                            <Typography>
                                                ${match?.price}
                                            </Typography>

                                        </Box>
                                        <Box className='delivery-options' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>
                                                Shipping Fee
                                            </Typography>
                                            <Typography>
                                                $12
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>
                                                Total
                                            </Typography>
                                            <Typography>
                                                ${total}
                                            </Typography>

                                        </Box>

                                    </Box>
                                    <button onClick={handleConfirmation} className='submit' type='submit'>Confirm Order</button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>}


                </Box>
            </Modal>
        </Box>
    );
};

export default OrderModal;