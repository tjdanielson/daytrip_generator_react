import React, { useState } from 'react';
import './../../App.css';

const FinalizeTrip = (props) => {
    
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    
    function PrintResults() {
        return (
            <div>
                <h2>Itinerary</h2>
                <div className='itinerary-card'>
                    <h3>Item one</h3>
                    <p>You will be traveling to {props.finalOptions[0].name}</p>
                    <img src='' />
                </div>
                <div className='itinerary-card'>
                    <h3>Item two</h3>
                    <p>While in place, you will be attending a(n) {props.finalOptions[1].name}</p>
                    <img src='' />
                </div>
                <div className='itinerary-card'>
                    <h3>Item three</h3>
                    <p>After your entertainment, you will enjoy a meal at restaurant {props.finalOptions[2].name}</p>
                    <img src='' />
                </div>
                <div className='itinerary-card'>
                    <h3>Item four</h3>
                    <p>Over the course of your day trip, you will be traveling by {props.finalOptions[3].name}</p>
                    <img src='' />
                </div>
        </div>
        );
    }
    
    return (
        <div className='finalize-trip-container'>
            <button onClick={onClick} style={{cursor: 'pointer'}}>Finalize your trip!</button>
            {showResults ? <PrintResults /> : null}
        </div>

    );

    debugger;
}

export default FinalizeTrip;