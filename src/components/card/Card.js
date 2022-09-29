import React from 'react';
import './Card.css';

const Card = ({btnFunction, card}) => {
    const {name, img, info, time} = card;
    
    return (
        <div className='card'>
            <img src={img} alt={name} />
            <div className='cart-info'>
                <h2>{name}</h2>
                <p>{info}</p>
                <p>Reading time : {time}min</p>
            </div>
            <button className='cart-btn' onClick={() => {btnFunction(card)}}>Add to list</button>
        </div>
    );
};

export default Card;