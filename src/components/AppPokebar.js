import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import img from './../assets/imgs/pokemon_logo.png';
import './../assets/styles/style.css'
import { Link } from "react-router-dom";


export default function AppPokebar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl" display="flex" justifyContent="center" alignItems="center">
                <div className='fcontainer'>
                    <div className='scontainer'>
                        <Link to="/" underline="hover" color="inherit" style={{ textDecoration: 'none' }}>                            <img id="logo"
                            alt="logo"
                            src={img}
                            title="pokelogo" />
                        </Link>
                    </div>
                </div>
            </Container>
        </AppBar>
    );
}
