import React, {useState} from "react";
import GenerateOption from "../GenerateOption/GenerateOption";
import FinalizeTrip from "../FinalizeTrip/FinalizeTrip";


const CategoryDisplay = (props) => {
    
    const [categories, setCategories] = useState([
        {
            name: 'Locations'
        }, 
        {
            name: 'Entertainment'
        }, 
        {
            name: 'Restaurant'
        }, 
        {
            name: 'Transportation'
        }, 
    ]);

    const getOptions = (category) => {
        const locations = [
            {
              name: 'Lisbon', 
              img: './assets/lisbon.png',
              type: 'location'
            },
            {
              name: 'London', 
              img: './assets/london.png',
              type: 'location'
            },
            {
              name: 'Rome', 
              img: './assets/rome.png',
              type: 'location'
            },
            {
              name: 'Barcelona', 
              img: './assets/barcelona.png',
              type: 'location'
            },
            {
              name: 'Amsterdam', 
              img: './assets/amsterdam.png',
              type: 'location'
            },
            ]
        const entertainment = [
            {
              name: 'Walking Tour', 
              img: './assets/walkingtour.png',
              type: 'entertainment'
            },
            {
              name: 'Wine Tasting', 
              img: './assets/winetasting.png',
              type: 'entertainment'
            },
            {
              name: 'Cooking Class', 
              img: './assets/cookingclass.png',
              type: 'entertainment'
            },
            {
              name: 'Art Museum', 
              img: './assets/artmuseum.png',
              type: 'entertainment'
            },
            ]
        const restaurants = [
            {
              name: 'Giuseppe\'s Pizza', 
              img: './assets/pizza.png',
              type: 'restaurant'
            },
            {
              name: 'Great Pasta', 
              img: './assets/pasta.png',
              type: 'restaurant'
            },
            {
              name: 'The Pub', 
              img: './assets/pub.png',
              type: 'restaurant'
            },
            {
              name: 'Yay Waffles', 
              img: './assets/waffles.png',
              type: 'restaurant'
            },
          ]
        const transportation = [
            {
              name: 'Bike', 
              img: './assets/bike.png',
              type: 'transportation'
            },
            {
              name: 'Foot', 
              img: './assets/foot.png',
              type: 'transportation'
            },
            {
              name: 'Train', 
              img: './assets/train.png',
              type: 'transportation'
            },
          ]
        
        let options = []

        switch (category) {
            case 'Locations':
                options = locations
                break;
            case 'Entertainment':
                options = entertainment
                break;
            case 'Restaurant':
                options = restaurants
                break;
            case 'Transportation':
                options = transportation
                break;
        }

        return options
    }

    const [finalOptions, setFinalOptions] = useState([])
    
    function getFinalOptions(option) {
        let tempFinalOptions = [...finalOptions]
        switch(option.type){
        case 'location':
            tempFinalOptions[0] = option;
            break;
        case 'entertainment':
            tempFinalOptions[1] = option;
            break;
        case 'restaurant':
            tempFinalOptions[2] = option;
            break;
        case 'transportation':
            tempFinalOptions[3] = option;
            break;
        }
        setFinalOptions(tempFinalOptions);
        return finalOptions
    }


    return (
        <div>
            {categories.map((category, i) =>
                <div key={i}>
                    <h1>
                    {`${category.name}`}
                    </h1>
                    <GenerateOption options={getOptions(category.name)}  getFinalOption={getFinalOptions}/>
                </div>
            )}
            <div className='finalize-trip-container'>
                <FinalizeTrip finalOptions={getFinalOptions}/>
            </div>
        </div>
    );
}

export default CategoryDisplay;

