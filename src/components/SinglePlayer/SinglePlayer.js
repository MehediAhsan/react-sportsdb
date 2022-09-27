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

    const handleBookmark = () => {
        const info ={
            idPlayer,
            strCutout,
            strPlayer,
            quantity:1,
            bookmark:'true'
        }
        const prevBookmark = localStorage.getItem('bookmark');
        const oldBookmark = JSON.parse(prevBookmark);
        if(oldBookmark){
            const isExist = oldBookmark.find(p => p.idPlayer === idPlayer);
            if(isExist){
                const updatedQuantity = isExist.quantity + 1;
                isExist.quantity = updatedQuantity;
                localStorage.setItem('bookmark',JSON.stringify(oldBookmark));
            }
            else{
                localStorage.setItem('bookmark',JSON.stringify([...oldBookmark,info]));
            }
            
        }
        else{
            localStorage.setItem('bookmark',JSON.stringify([info]))
        }

    }

    return (
        <div className='card' data-aos="zoom-in">
            <img className='card-image' src={strCutout} alt="" />
            <h5>{strPlayer}</h5>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to Cart</button>
            <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;