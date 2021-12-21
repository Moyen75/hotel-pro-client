import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://arcane-tor-66544.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    console.log(users)
    return (
        <TableContainer component={Paper}>
            <Typography variant='h4' className='my-orders' sx={{ marginY: '10px' }}>
                All Users
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Remove</TableCell>
                        <TableCell align="center">Make Admin</TableCell>
                        <TableCell align="center">Role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.displayName}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center"><button>Remove</button></TableCell>
                            <TableCell align="center"><button>Make Admin</button></TableCell>
                            <TableCell align="center">user</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MakeAdmin;