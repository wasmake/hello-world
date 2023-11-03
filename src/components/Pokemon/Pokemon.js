import React from "react";
import "./pokemon.scss";

export default function Pokemon(props) {
    const { name, sprite, types, id } = props;

    return (
        <div className="pokemon">
            <h1 className="name">{name} <span className="pokedex">{id}</span></h1>
            <img className="sprite" src={sprite} alt={name} />
            <div className="types">
                {
                    types.map((type, index) => {
                        return <p className={type} key={index}>{type}</p>
                    })
                }
            </div>
        </div>
    )
}