import React, { useState, createContext, useEffect } from 'react';

export const userContext = createContext();

export const UserProvider = (props) => {

    const [allPokemons, setAllPokemons] = useState([]);

    const getAllPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        const response = await fetch(`${baseURL}pokemon?limit=21`);
        const pokeData = await response.json();

        const promises = pokeData.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);

        setAllPokemons([...allPokemons, ...results]);
    };


    const getPokemonById = async id => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        const response = await fetch(`${baseURL}pokemon/${id}`);
        const pokeData = await response.json();
        return pokeData;
    };

    const getPokemonDetailsById = async id => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        const response = await fetch(`${baseURL}pokemon-species/${id}/`);
        const pokeData = await response.json();
        return pokeData;
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <userContext.Provider value={{ allPokemons, getPokemonById, getPokemonDetailsById }}>
            {props.children}
        </userContext.Provider>
    );
}
