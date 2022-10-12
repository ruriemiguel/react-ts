import { Grid, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';

function Footer(): JSX.Element {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={3} display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/rurie.miguel/" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/rurie.miguel/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/ruriemiguel/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href="https://www.tibia.com/" target="_blank">
                                <img alt="Rurie-logo" src="https://i.imgur.com/pXksYgO.gif" className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box >
                        <Box paddingTop={1} className='box2'>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>
                                ©2022 Copyright: Ruriê Miguel Pacheco
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;