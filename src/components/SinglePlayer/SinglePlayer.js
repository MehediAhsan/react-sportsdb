import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = ({player}) => {
    console.log(player);
    const {strCutout,strPlayer} = player
    return (
        <div className='card'>
            <img className='card-image' src={strCutout} alt="" />
            <h5>{strPlayer}</h5>
            <button className='card-btn'>Details</button>
            <button className='card-btn'>Add to Cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;