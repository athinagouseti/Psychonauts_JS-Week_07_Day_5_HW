import React from "react";
import './FavouriteCharacter.css'

const FavouriteCharacter = ({character}) => {

    return (
        <div class="favourite-character-entry" key={character._id}>
            <div class="favourite-image-container">
                <img class="favourite-character-image" src={character.img} alt={character.name} />
            </div>
            <div class="character-name">{character.name}</div>
        </div>)
}

export default FavouriteCharacter;