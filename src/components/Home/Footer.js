import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img from "./../../assets/imgs/pokemon_logo.png";
import "./../../assets/styles/style.css";

export default function Footer() {

    return (
        <div>
            <Grid className='footer'container justify="center" spacing={2} style={{margin: 10}}>
                <Grid item xs={11} sm={3} >
                    <Grid container direction="column" >
                        <div className='footercontainer'>
                            <div className='scontainer'>
                                <img id="logofooter"
                                    alt="logo"
                                    src={img}
                                    title="pokelogo" />
                            </div>
                        </div>
                        <Typography variant="button" display="block" gutterBot>
                            © PokeApp 2024
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Morelia, Mich., México
                        </Typography>

                    </Grid>
                </Grid>
                <Grid item xs={11} sm={3} >
                    <Grid container direction="column" >
                        <Typography variant="button" display="block" gutterBottom>
                            Más sobre
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            marlene.cintora.c@gmail.com
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            4431316125
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}