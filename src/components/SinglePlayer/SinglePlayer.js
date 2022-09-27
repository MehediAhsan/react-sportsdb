import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = ({player, cart, setCart}) => {
    // console.log(player);
    const {idPlayer,strCutout,strPlayer} = player;

    const handleAddToCart = () => {
        const info ={
            idPlayer,
            strCutout,
            strPlayer
        }
        if(cart){
            const newPlayer = [...cart, info]
            setCart(newPlayer);
        }
        else{
            setCart([info]);
        }
    }

    return (
        <div className='card'>
            <img className='card-image' src={strCutout} alt="" />
            <h5>{strPlayer}</h5>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to Cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;