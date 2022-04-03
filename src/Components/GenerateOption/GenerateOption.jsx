import React, { useState } from 'react';
import './../../App.css';

const GenerateOption = (props) => {

    const [option, setOption] = useState({});

    function selectOptions(event) {
        event.preventDefault();
        let randomNumber = Math.floor(Math.random() * props.options.length)
        let randomSelection = props.options[randomNumber]
        console.log(randomSelection);
        setOption(randomSelection); 
        props.getFinalOptions(randomSelection);
    }


    return (
        <div className='option-card'>
            <div className='image-container'>
                <img src={option.img} />
            </div>
            <div className='card-words'>
                <h3>{option.name}</h3>
                <div className='button-container'>
                    <button onClick={selectOptions} style={{cursor:'pointer'}}>
                        Generate Option!
                    </button>
                </div>
            </div>
      </div>

    );

    debugger;
}

export default GenerateOption;

