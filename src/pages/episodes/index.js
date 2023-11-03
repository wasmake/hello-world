import React from "react";
import EpisodeBrowser from "../../components/EpisodeBrowser/EpisodeBrowser";

export default function Episodes() {
    const episodeArray = [
        {
            name: "Piloto los simpsons",
            air_date: "December 17, 1989",
            episode: "S01E01",
            cover_img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/04/simpson-senor-burns-1923151.jpg"
        },
        {
            name: "Bart the Genius",
            air_date: "January 14, 1990",
            episode: "S01E02",
            cover_img: "https://nerdiertides.files.wordpress.com/2016/03/crying_bart.jpg"
        },
        {
            name: "Homer's Odyssey",
            air_date: "January 21, 1990",
            episode: "S01E03",
            cover_img: "https://i.ytimg.com/vi/VK85JzdoZPo/maxresdefault.jpg"
        },
        {
            name: "There's No Disgrace Like Home",
            air_date: "January 28, 1990",
            episode: "S01E04"
        },
        {
            name: "Bart the General",
            air_date: "February 4, 1990",
            episode: "S01E05"
        },
        {
            name: "Moaning Lisa",
            air_date: "February 11, 1990",
            episode: "S01E06"
        },
        {
            name: "The Call of the Simpsons",
            air_date: "February 18, 1990",
            episode: "S01E07"
        },
        {
            name: "The Telltale Head",
            air_date: "February 25, 1990",
            episode: "S01E08"
        },
        {
            name: "Life on the Fast Lane",
            air_date: "March 18, 1990",
            episode: "S01E09"
        },
        {
            name: "Homer's Night Out",
            air_date: "March 25, 1990",
            episode: "S01E10"
        },
        {
            name: "The Crepes of Wrath",
            air_date: "April 15, 1990",
            episode: "S01E11"
        },
        {
            name: "Krusty Gets Busted",
            air_date: "April 29, 1990",
            episode: "S01E12"
        },
        {
            name: "Some Enchanted Evening",
            air_date: "May 13, 1990",
            episode: "S01E13"
        },
    ];
    return <EpisodeBrowser episodes={episodeArray} />;
}