import React from "react";
import './SelectedCharacter.css';
import CharacterPsiPower from "./CharacterPsiPower";


const SelectedCharacter = ({character, onFavouriteCharacterClick, favouriteCharacters}) => {


    if (!character) {
        return (
        <div id="selected-characters">
            No Character Selected
        </div>
        );
    }
    
    const characterIsFavourite = favouriteCharacters.some((favourite) => {
        return favourite._id === character._id
    })

    let buttonText = ""
     if (characterIsFavourite) {
         buttonText = "Remove Favourite Character"
    } else {
        buttonText = "Add Favourite Character"
    }

    const getPsiPowers = character.psiPowers.map((psiPower) => {
        return <CharacterPsiPower key={psiPower._id} psiPower={psiPower} /> 


    });

    const handleFavouriteCharacterClick = function(character){
        onFavouriteCharacterClick(character);
    };

    return(
        <div id="selected-characters">
            <h2 id="character-name">{character.name}</h2>
            <p id="character-gender">{character.gender}</p>
            <button id="favourite-button" type="button" onClick={() => {handleFavouriteCharacterClick(character)}}>{buttonText}</button>
            <img id="character-image" src={character.img} alt="character-image" />
            <p>{getPsiPowers}</p>
        </div>

    );

};


export default SelectedCharacter;