import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import NavigationBreadcrumbs from './Home/NavigationBreadcrumbs';
import { userContext } from "./../context/UserContext";
import { useLocation } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Footer from './Home/Footer';

export default function Detail(props) {

    const { getPokemonById, getPokemonDetailsById } = useContext(userContext);
    const location = useLocation();
    const propsData = location.state;
    const [info, setInfo] = useState([]);
    const [detail, setDetail] = useState([]);
    const [load, setLoad] = useState(true);

    const fetchInfoPokemon = (id) => {
        getPokemonById(id)
            .then((response) => {
                setInfo(response);
                setLoad(false);

            })
            .catch((error) => {
                console.log("error: " + error);
            });
    };

    const fetchDetailsPokemon = async (id) => {
        try {
            const response = await getPokemonDetailsById(id);
            const esFlavorTexts = response.flavor_text_entries
                .filter(entry => entry.language.name === "es")
                .map(entry => entry.flavor_text);
            const joinedFlavorTexts = esFlavorTexts.join(" ");
            setDetail(joinedFlavorTexts);
            setLoad(false)
        } catch (error) {
            console.error("Error fetching Pokemon details:", error);
        }
    };

    useEffect(() => {
        fetchInfoPokemon(propsData);
    }, []);

    useEffect(() => {
        fetchDetailsPokemon(propsData);
    }, []);

    return (
        <div>
            <Box sx={{ bgcolor: '#000000', height: '100vh' }} >
                <NavigationBreadcrumbs nombre={info.name} />
                {load || info.length === 0 ?
                    <>
                        <Grid container spacing={2} minHeight={160}>
                            <Grid xs display="flex" justifyContent="center" alignItems="center">
                                <Box sx={{ width: 400 }}>
                                    <Skeleton variant="rectangular" animation="wave" height={200} />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation="wave" width={60} />
                                </Box>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid container spacing={1} minHeight={160} >
                            <Grid xs display="flex" justifyContent="center" alignItems="center">
                                <Box sx={{ bgcolor: '#000000', maxWidth: 500 }}>
                                    <img
                                        src={info.sprites.other.dream_world.front_default}
                                        alt={info.name}
                                        loading="lazy"
                                    />
                                    <Typography variant="h2" gutterBottom>
                                        {info.name}
                                    </Typography>
                                    <Typography variant="body2" align="justify">
                                        {detail}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </>
                }
                <Footer />
            </Box>
        </div >
    )
}
