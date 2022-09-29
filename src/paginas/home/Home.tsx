import React from 'react';
import { Button, Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import './Home.css';
import { HeightSharp } from '@material-ui/icons';

function Home() {
    return (
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Hello React</h1>
                    </Box>
                    <img src="https://reactjs.org/logo-og.png" alt="Logo do React" style={{width:"100%", height:"100%"}} />
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary">Button 1</Button>
                        <Button variant="contained" color="secondary">Button 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;