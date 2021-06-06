import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export const CoronaApp = () => {
    const classes = useStyles();
    const api = `https://api.covid19india.org/data.json`;
    const [getdata, setGetdata] = useState([])

    useEffect(async (index) => {
        const fetchapi = await fetch(api);
        const response =  await fetchapi.json();
        setGetdata(response.statewise)
    },[1])

    return (
        <TableContainer component={Paper}>
            <h1 style={{textAlign:'center',color:'green'}}>Corona App</h1>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red',fontWeight:'bold'}}>State Name</TableCell>
                        <TableCell align="right" style={{color:'red',fontWeight:'bold'}}>Active</TableCell>
                        <TableCell align="right" style={{color:'red',fontWeight:'bold'}}>Confirmed</TableCell>
                        <TableCell align="right" style={{color:'red',fontWeight:'bold'}}>Deaths</TableCell>
                        <TableCell align="right" style={{color:'red',fontWeight:'bold'}}>Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getdata.map((row,index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.state}
                            </TableCell>
                            <TableCell align="right">{row.active}</TableCell>
                            <TableCell align="right">{row.confirmed}</TableCell>
                            <TableCell align="right">{row.deaths}</TableCell>
                            <TableCell align="right">{row.recovered}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

