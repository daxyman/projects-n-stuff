import React from 'react';
import './Recettes.css'; 
import {cards} from '../assets/recipees'
import RecetteCard from './RecetteCard';

const recette = cards.map( recetteCard => (
    <RecetteCard
    key={recetteCard.id}
    source={recetteCard.source}
    alt={recetteCard.alt}
    title={recetteCard.title}
    p={recetteCard.p}
    />
    )
    )

function Recettes() {
    return (
        <ul className='card-list'>
            {recette}
        </ul>
    );
}

export default Recettes;