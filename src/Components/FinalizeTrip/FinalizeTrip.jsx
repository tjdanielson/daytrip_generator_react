import React, { useState } from 'react';
import './../../App.css';

const FinalizeTrip = (props) => {
    
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    
    function PrintResults() {
        if(props.finalOptions.length < 4){
            return (
                <div className='error-message'>
                    Please generate options for all items above before finalizing your trip.
                </div>
            )
        }
        return (
            <div>
                <h2>Final Itinerary</h2>
                <div className='itinerary-card'>
                    <h3>One - Location</h3>
                    <p>You will be traveling to {props.finalOptions[0].name}</p>
                    <img src='' />
                </div>
                <div className='itinerary-card'>
                    <h3>Two - Entertainment</h3><br />
                    <p>While in {props.finalOptions[0].name}, you will be attending a(n) {props.finalOptions[1].name}</p>
                    <img src='' />
                </div>
                <div className='itinerary-card'>
                    <h3>Three - Restaurant</h3><br />
                    <p>After your entertainment, you will enjoy a meal at {props.finalOptions[2].name}</p>
                    <img src='' />
                </div>
                <div className='itinerary-card'>
                    <h3>Four - Transportation</h3><br />
                    <p>Over the course of your day trip, you will be traveling by {props.finalOptions[3].name}</p>
                    <img src='' />
                </div>
        </div>
        );
    }

    function refreshPage() {
        window.location.reload(false);
      }
    
    return (
        <div className='finalize-trip-container'>
            <div className='buttons'>
                <button onClick={onClick} style={{cursor: 'pointer'}}>Finalize your trip</button>
                <div className='bottom-button'>
                    <button onClick={refreshPage} style={{cursor: 'pointer'}}>Restart Generator</button>
                </div>
            </div>
            {showResults ? <PrintResults /> : null}
        </div>

    );

    debugger;
}

export default FinalizeTrip;