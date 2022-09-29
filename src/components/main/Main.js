import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Aside from "../aside/Aside";
import "./Main.css"

const Main = () => {
    const [cards, setCard] = useState([]);
    const [subj, setSubj] = useState([]);
    useEffect(() => {
        fetch('readingData.json')
        .then(res => res.json())
        .then(data => setCard(data));
    }, [])

    const btnFunction = (card) => {
        const newCart =[...subj, card];
        setSubj(newCart)
    }

    return (
        <div className='main-container'>
            <div className="activities-container">
                {/* card section */}
                {
                    cards.map( card => <Card 
                        key={card.id} 
                        card={card}
                        btnFunction={btnFunction}
                        ></Card>)
                }
            </div>
            <div className="profile-container">
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Main;