import React from 'react';
import image1 from './keyboard1.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='keyboard-text'>
            <div className='text'>
                <h1>
                    <span style={{ color: 'blue' }} >Keychorn Keyboard is a Beast</span>
                    <br />
                    <span style={{ color: 'green' }}>It has Ultra Fast Technology </span>
                </h1>
                <br />
                <p>
                    Keychron K2 is a 75% layout (84-keys) white backlit compact Bluetooth mechanical keyboard. The ultimate keyboard that retains shortcut and arrow keys.
                </p>
                <br />
                <button className='detail-btn'>See Details</button>
            </div>
            <div>
                <img src={image1} alt="" height={'600px'} />
            </div>
        </div>

    );
};

export default Home;