import React from 'react';
import './RecetteCard.css'; 

function RecetteCard(props) {
    return (
        <div className="RecetteCard-card" key={props.id}>
            <h2>{props.source} {props.alt}</h2>
            <p><strong>Nom :</strong> {props.title}</p>
            <p><strong>description :</strong> {props.p}</p>
        </div>
    );
}

export default RecetteCard;