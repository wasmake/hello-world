import React from "react";
import PokemonBrowser from "../../components/PokemonBrowser/PokemonBrowser";
import PokemonSearch from "../../components/PokemonBrowser/PokemonSearch";

export default function Pokemones() {

    return (
        <div className="pokemones">
            <h1>Pokemones</h1>
            <PokemonBrowser />
            <PokemonSearch />
        </div>
    );
}