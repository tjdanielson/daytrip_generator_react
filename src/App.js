import { useState } from 'react';
import './App.css';
import GenerateOption from './Components/GenerateOption/GenerateOption';

function App() {

  const locations = [
    {
      name: 'Lisbon', 
      img: './assets/lisbon.png'
    },
    {
      name: 'London', 
      img: './assets/london.png'
    },
    {
      name: 'Rome', 
      img: './assets/rome.png'
    },
    {
      name: 'Barcelona', 
      img: './assets/barcelona.png'
    },
    {
      name: 'Amsterdam', 
      img: './assets/amsterdam.png'
    },
    ]

  const entertainment = [
    {
      name: 'Walking Tour', 
      img: './assets/walkingtour.png'
    },
    {
      name: 'Wine Tasting', 
      img: './assets/winetasting.png'
    },
    {
      name: 'Cooking Class', 
      img: './assets/cookingclass.png'
    },
    {
      name: 'Art Museum', 
      img: './assets/artmuseum.png'
    },
    ]
  const restaurants = [
    {
      name: 'Pizza', 
      img: './assets/pizza.png'
    },
    {
      name: 'Pasta', 
      img: './assets/pasta.png'
    },
    {
      name: 'Pub', 
      img: './assets/pub.png'
    },
    {
      name: 'Waffles', 
      img: './assets/waffles.png'
    },
  ]
  const transportation = [
    {
      name: 'Bike', 
      img: './assets/bike.png'
    },
    {
      name: 'Foot', 
      img: './assets/foot.png'
    },
    {
      name: 'Train', 
      img: './assets/train.png'
    },
  ]


  return (
    <div>
      <header>
        {/* banner */}
        <div className='banner-flex'>
          <div className='banner-img'>
            <img src='./assets/awaywego_white.png' alt-text='logo' />
          </div>
          <div className='banner-words'>
            <h2>
              Welcome to AWAY WE GO!
            </h2>
            <p>
              We will generate a daytrip of your dreams! Don't like an option? No worries, keep clicking 'Generate Option' until you're satisfied with your trip. <br/>Without further ado....Away We Go!!!
            </p>
          </div>
        </div>
      </header>
      <body>
        {/* conatiner for cards */}
        <div className='options-flex'>
          <div>
            <GenerateOption options={locations}/>
          </div>
          <div>
            <GenerateOption options={entertainment}/>
          </div>
          <div>
            <GenerateOption options={restaurants}/>
          </div>
          <div>
            <GenerateOption options={transportation}/>
          </div>
        </div>
        <img src='./assets/awaywego_white.png' />
        <button>
          Click here to start over
        </button>
      </body>
    </div>
  );
}

export default App;
