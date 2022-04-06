import { useState } from 'react';
import './App.css';
import GenerateOption from './Components/GenerateOption/GenerateOption';
import FinalizeTrip from './Components/FinalizeTrip/FinalizeTrip';
import Banner from './Components/Banner/Banner';

function App() {

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
  }


  return (
    <div>
      <Banner />
        {/* conatiner for cards */}
      <div className='options-flex'>
        <div>
          <h1>Location</h1>
          <GenerateOption options={locations} getFinalOptions={getFinalOptions}/>
        </div>
        <div>
        <h1>Entertainment</h1>
          <GenerateOption options={entertainment} getFinalOptions={getFinalOptions}/>
        </div>
        <div>
        <h1>Restaurant</h1>
          <GenerateOption options={restaurants} getFinalOptions={getFinalOptions}/>
        </div>
        <div>
        <h1>Transportation</h1>
          <GenerateOption options={transportation} getFinalOptions={getFinalOptions}/>
        </div>
      </div>
      <div className='finalize-trip-container'>
        <FinalizeTrip finalOptions={finalOptions}/>
      </div>
      <div className='bottom-logo-container'>
        <img src='./assets/awaywego_white.png' />
        </div>
    </div>
  );
}

export default App;
