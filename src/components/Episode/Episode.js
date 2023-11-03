import React from "react";

import "./episode.scss";

export default function Episode(props) {
    const {name, air_date, episode, cover_img} = props.episode;
    return (
        <div className="episode">
            <div className="episodeCover">
                { cover_img && <img src={cover_img} alt={name} width={300}/> }
            </div>
            <h1>{name}</h1>
            <h2>{air_date}</h2>
            <h3>{episode}</h3>
        </div>
    );
}