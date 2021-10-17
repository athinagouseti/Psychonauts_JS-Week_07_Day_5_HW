import React from "react";
import './CharacterPsiPower.css'


const CharacterPsiPower = ({psiPower}) => {


    return(
        <div class="psi-power"> 
            <div class="psi-power-image-container">
                <img src={psiPower.img} alt="psiPower-img" class="psi-power-image"/>
            </div>
            <div class="psi-power-info">
                <p class="power-name">{psiPower.name}</p>
                <p class="power-description">{psiPower.description}</p>
            </div>
        </div>
    );
};

export default CharacterPsiPower;