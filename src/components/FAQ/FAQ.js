import React from 'react';
import './FAQ.css'
const FAQ = () => {
    return (
        <div className='FAQ'>
            <h2>Frequently Asked Questions</h2>
            <br />
            <div className='content'>
                <h4>How does React Work?</h4>
                <p>ReactJS separates the user interface (UI) into discrete, reusable code chunks known as components. Due to the fact that they accept arbitrary inputs known as properties or props, React components operate similarly to JavaScript functions. It is feasible to have as many components as necessary without having a cluttered code.</p>
            </div>
            <br />
            <div className='content'>
                <h4>Difference Between Props and State?</h4>
                <p>Data is transferred between components using props. A local data storage, the state is exclusive to the component and cannot be shared with other components. This is. The component's state values can be updated using the setState attribute.</p>
            </div>
            <br />
            <div className='content'>
                <h4>What are the usecases of useEffect except loading data from api ?</h4>
                    <ul>
                        <li>Reading from local storage</li>
                        <li>Listeners to events are registered and deregistered</li>
                    </ul>
            </div>
        </div>
    );
};

export default FAQ;