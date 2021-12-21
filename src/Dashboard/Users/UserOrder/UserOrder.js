import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import '../../../Style/Style.css'
import swal from 'sweetalert';

const UserOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://arcane-tor-66544.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email, orders])
    const handleDelete = id => {
        fetch(`https://arcane-tor-66544.herokuapp.com/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    success()
                }
            })
    }
    const success = () => {
        swal(
            'Good job!',
            'Order deleted successfully!',
            'success'
        )
    }
    return (
        <TableContainer component={Paper} >
            <Typography variant='h4' className='my-orders'>
                MY ORDERS
            </Typography>
            <Table sx={{ minWidth: 650, marginX: 'auto', marginTop: '10px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">status</TableCell>
                        <TableCell align="center">Total Cost</TableCell>
                        <TableCell align="center">Cancel Order</TableCell>
                        <TableCell align="center">Payment status</TableCell>
                        <TableCell align="center">Pay Now</TableCell>
                        <TableCell align="center">Address </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.match.title}
                            </TableCell>
                            <TableCell align="center">${row?.match.price}</TableCell>
                            <TableCell align="center">{row?.status}</TableCell>
                            <TableCell align="center">${row?.total}</TableCell>
                            <TableCell align="center"><button onClick={() => handleDelete(row._id)}><i class="fas fa-trash-alt"></i></button></TableCell>
                            <TableCell align="center">{row.paymentStatus}</TableCell>
                            <TableCell align="center"><button>pay</button></TableCell>
                            <TableCell align="center">{row.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserOrder;