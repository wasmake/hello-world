import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon from "../../components/Pokemon/Pokemon";

export default function Test() {

    const [pokemon, setPokemon] = useState({}); // [state, setState
    const {param} = useParams();


    const searchPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`);
        const data = await response.json();
        console.log(data);

        setPokemon({
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default,
            types: data.types.map((type) => {
                return type.type.name;
            })
        });
    }

    useEffect(() => {
        searchPokemon();
    }, []);

    return (
        <div className="test">
            <h1>Test</h1>
            {pokemon.id && <Pokemon {...pokemon} />}
        </div>
    );
}
