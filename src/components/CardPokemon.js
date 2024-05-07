import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CardPokemon({ props }) {

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {`Peso: ${props.weight}`}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Button size="small" variant="outlined">
                        <Link style={{ textDecoration: 'none', color: '#ffffff' }} to={`/details/${props.id}`} state={props.id} id={props.id}>
                            Acerca de
                        </Link>
                    </Button>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ marginLeft: 10, maxWidth: 80, maxHeight: 100 }}
                image={props.sprites.other.showdown.front_default}
                alt={props.name}
            />
        </Card>
    );
}