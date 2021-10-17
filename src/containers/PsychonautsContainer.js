import React, { useState, useEffect } from "react";
import FavouriteCharacters from "../components/FavouriteCharacters";
import PsychonautsList from "../components/PsychonautsList";
import SelectedCharacter from "../components/SelectedCharacter";
import './PsychonautsContainer.css';
import logo from "./psychonauts-logo.png"

const PsychonautsContainer = ()=>{

    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [favouriteCharacters, setFavouriteCharacters] = useState([]);

    const fetchAllCharacters = ()=>{
        fetch("https://psychonauts-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => setCharacters(data))
    }

    useEffect(()=>{
        fetchAllCharacters()
    },[]);

    const onCharacterClick = (character) => {
        setSelectedCharacter(character)
    };

    const onFavouriteCharacterClick = function(character){
        const characterAlreadyFavourite = favouriteCharacters.some((favourite) => {
            return favourite._id === character._id
        })

        if (characterAlreadyFavourite) {
            const newFavouriteCharacters = favouriteCharacters.filter((favourite) => {
                return favourite._id !== character._id
            })
             setFavouriteCharacters(newFavouriteCharacters)
        } else {
            const copiedFavouriteCharacters = [...favouriteCharacters, character]
            setFavouriteCharacters(copiedFavouriteCharacters)
        }

    };
    
    return(
        <>
            <div id="logo-container">
                <img src={logo} id="logo" />
            </div>
            <div id="container">
                <PsychonautsList characters={characters} onCharacterClick={onCharacterClick} selectedCharacter={selectedCharacter} />
                <SelectedCharacter character={selectedCharacter} onFavouriteCharacterClick={onFavouriteCharacterClick} favouriteCharacters={favouriteCharacters} />
                <FavouriteCharacters favouriteCharacters={favouriteCharacters} />

            </div>
        </>
    );
};


export default PsychonautsContainer;