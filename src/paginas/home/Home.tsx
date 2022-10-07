import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import './Home.css';
import { HeightSharp } from '@material-ui/icons';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>RuriBlog!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Meus pensamentos, opiniões e quem eu sou!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Conheça meu mundo</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} className="divlogo">
                    <img className="logo" src="https://i.imgur.com/XLLH2qM.png" alt="rurielogo" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;