import React, { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";

export default function PokemonSearch() {
    const [pokemon, setPokemon] = useState({});

    const searchPokemon = async () => {
        const pokemonName = document.getElementById('pokemon-name').value;
        const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)).json();
        setPokemon({
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default,
            types: data.types.map((type) => {
                return type.type.name;
            })
        });
    }

    return (
        <div className="pokemon-search">
            <div>
                <h1>Pokemon Search</h1>
                <input type="text" placeholder="Search a pokemon" id="pokemon-name" />
                <button onClick={searchPokemon}>Search</button>
                {pokemon.id && <Pokemon {...pokemon} />}
            </div>
        </div>
    );
}