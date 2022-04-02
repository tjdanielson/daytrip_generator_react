import './App.css'

function App() {
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
          {/* card */}
          <div>
            <div>
              <img src='./assets/world.png' />
              <h3>Location</h3>
            </div>
            {/* buttons in card */}
            <div>
              <button>
                Accept
              </button>
              <button>
                New Pick
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src='./assets/entertainment.png' />
              <h3>Entertainment</h3>
            </div>
            {/* buttons in card */}
            <div>
              <button>
                Accept
              </button>
              <button>
                New Pick
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src='./assets/restaurant.png' />
              <h3>Restaurant</h3>
            </div>
            {/* buttons in card */}
            <div>
              <button>
                Accept
              </button>
              <button>
                New Pick
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src='./assets/transportation.png' />
              <h3>Transportation</h3>
            </div>
            {/* buttons in card */}
            <div>
              <button>
                Accept
              </button>
              <button>
                New Pick
              </button>
            </div>
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
