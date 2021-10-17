import React from "react";
import './PsychonautsListItem.css'

const PsychonautsListItem = ({character, onCharacterClick, isSelected})=>{

    const handleCharacterClick = () => {
        onCharacterClick(character);
    };

    let classes = "list-item";

    if (isSelected) {
        classes += " selected";
    }

    return(
        <li class={classes} onClick={handleCharacterClick}>{character.name}</li>
    );
};


export default PsychonautsListItem;