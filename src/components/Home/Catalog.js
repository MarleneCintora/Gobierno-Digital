import React, { useEffect, useContext } from 'react';
import { getPokemons } from "../../services/pokeapi";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardPokemon from '../CardPokemon';
import { userContext } from '../../context/UserContext';

export default function Catalog() {

    const { allPokemons } = useContext(userContext);

    const fetchAllPokemons = () => {
        getPokemons()
            .then((response) => {
                console.log("success");

            })
            .catch((error) => {
                console.log("error: " + error);
            });
    };

    useEffect(() => {
        let isCancelled = false;
        try {
            fetchAllPokemons();
            console.log('component will mount');
        } catch (error) {
            if (!isCancelled) {
                throw error;
            }
        }
        return () => {
            isCancelled = true;
            console.log('component will unmount');
        };
    }, []);

    return (
        <div>
            <Grid container spacing={3}>
                {
                    allPokemons.map((item, i) => (
                        <Grid key={i} item xs={15} sm={4}>
                            <Paper>
                                <CardPokemon props={item} key={item.id} />
                            </Paper>
                        </Grid>
                    ))}
            </Grid>
        </div >
    )
}
