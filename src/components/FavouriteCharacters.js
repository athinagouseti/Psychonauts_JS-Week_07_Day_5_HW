import React from "react";
import './FavouriteCharacters.css';
import FavouriteCharacter from "./FavouriteCharacter";

const FavouriteCharacters = ({favouriteCharacters}) => {

    const favouriteCharactersOptions = favouriteCharacters.map((character) => {
        return <FavouriteCharacter character={character} />
    })

    return(
        <div id="favourite-characters">
            <h2>Favourite Characters</h2>
            {favouriteCharactersOptions}
        </div>    
    );

};


export default FavouriteCharacters;