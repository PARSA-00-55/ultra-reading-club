import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, img, info} = props.card
    return (
        <div className='card'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    );
};

export default Card;