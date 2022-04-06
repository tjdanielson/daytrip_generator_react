import React from "react"

const Banner = (props) => {
    return (
        <div className='banner-flex'>
            <div className='banner-img'>
                <img src='./assets/awaywego_white.png' alt-text='logo' />
            </div>
            <div className='banner-words'>
                <h2>
                    Welcome to AWAY WE GO!
                </h2>
                <p>
                    We will generate a daytrip of your dreams! Don't like an option? No worries, keep clicking 'Generate Option' until you're satisfied with your trip. 
                </p>
                <h3>
                    Without further ado....Away We Go!!!
                </h3>
            </div>
      </div>
    )
}

export default Banner;

