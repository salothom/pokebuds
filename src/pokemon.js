import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';


export default function Pokemon() {

    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);

        fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json()).then(

            (result) => {

                setPokemon(result.results)
                console.log(result.results);

                setLoading(false)
            },
            (error) => {
                console.log(error);
                setLoading(false)
            }
        )
    },
        [])


    return (
        <div>
            {loading && <div>LOADING!!!!</div>}
            <div className="flexConatiner">
                {!loading && pokemon &&
                    pokemon.map(poke => (<div key={poke.name}>{poke.name}</div>))}
            </div>
        </div>
    )



}