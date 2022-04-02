import React, { useState } from 'react';

const GenerateOption = (props) => {

    const [option, setOption] = useState({});

    function selectOptions(event) {
        event.preventDefault();
        let randomNumber = Math.floor(Math.random() * props.options.length)
        let randomSelection = props.options[randomNumber]
        console.log(randomSelection);
        setOption(randomSelection); 
    }


    return (
        <div>
            <div>
                <img src={option.img} />
                <h3>{option.name}</h3>
            </div>
            {/* buttons in card */}
            <div>
                <button onClick={selectOptions}>
                    Generate Option!
                </button>
            </div>
      </div>

    );

    debugger;
}

export default GenerateOption;

