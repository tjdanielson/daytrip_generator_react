import { useState } from 'react';
import './App.css'
import GenerateOption from './Components/GenerateOption/GenerateOption';

function App() {

  const locations = ['Lisbon', 'London', 'Rome', 'Barcelona', 'Amsterdam']
  const entertainment = ['Walking Tour', 'Wine Tasting', 'Cooking Class', 'Art Museum']
  const restaurants = ['Pizza', 'Pasta', 'Pub'];
  const transportation = ['Bike', 'Foot', 'Train'];


  return (
    <div>
      <header>
        {/* nav bar */}
        <div class='nav-flex'> 
          <h3>DAYTRIP GENERATOR</h3>
          <div>
            <img src='./assets/Awaywego.png' alt-text='logo'/>
          </div>
        </div>
        {/* banner */}
        <div>
          <div>
            <img src='./assets/awaywego_white.png' alt-text='logo' />
          </div>
          <div>
            <h2>
              Welcome to the DAYTRIP GENERATOR
            </h2>
            <button>
              Click here to generate your trip
            </button>
          </div>
        </div>
      </header>
      <body>
        {/* conatiner for cards */}
        <div>
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
