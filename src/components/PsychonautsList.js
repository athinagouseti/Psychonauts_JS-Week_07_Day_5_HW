import React from "react";
import PsychonautsListItem from "./PsychonautsListItem";
import './PsychonautsList.css';

const PsychonautsList = ({characters, onCharacterClick, selectedCharacter})=> {

    const characterList = characters.map((character)=> {
        const isSelected = selectedCharacter?._id === character._id
        return <PsychonautsListItem key={character._id} character={character} onCharacterClick={onCharacterClick} isSelected={isSelected} />
    })

    return(
        <div id="psychonauts-list"> 
            <h2>Characters</h2>
            <ul>
                {characterList}
            </ul>
        </div>
        
    );
};

export default PsychonautsList;