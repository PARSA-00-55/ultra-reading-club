import React from 'react';
import './FAQ.css'
const FAQ = () => {
    return (
        <div className='FAQ'>
            <h2>Frequently Asked Questions</h2>
            <br />
            <div className='content'>
                <h4>How does React Work?</h4>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <br />
            <div className='content'>
                <h4>Difference Between Props and State?</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <br />
            <div className='content'>
                <h4>What are the usecases of useEffect except loading data from api ?</h4>
                    <ul>
                        <li>Reading from local storage</li>
                        <li>Registering and deregistering event listeners</li>
                    </ul>
            </div>
        </div>
    );
};

export default FAQ;