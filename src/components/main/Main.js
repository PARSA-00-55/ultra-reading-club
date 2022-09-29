import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import "./Main.css"

const Main = () => {
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch('readingData.json')
        .then(res => res.json())
        .then(data => setCard(data));
    }, [])



    return (
        <div className='main-container'>
            {/* logo and heading */}
            <div className='heading'>
                <img src="../../website-icon.svg" alt="" />&nbsp;&nbsp;&nbsp;
                <div className='heading-title'>
                <h1>
                    Ultra Reading Club
                </h1>
                <h5>
                    Be a wise persone
                </h5>
                </div>
            </div>
            {/* card section */}
            <div className='card-container'>
                {
                    cards.map( card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Main;