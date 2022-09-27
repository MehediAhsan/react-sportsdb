import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player))
    }, [search])

    const handleDelete = (id) => {
        const leftPlayer = cart.filter(p => p.idPlayer !== id)
        setCart(leftPlayer);
        toast("Wow deleted player from the card!");
    }

    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players players={players} cart={cart} setCart={setCart}></Players>
                    </div>
                </div>
                <div className="right-side">
                    <div className="cart">
                        <h3>Pleyer found {cart.length}</h3>
                        {
                            cart?.map(p => (
                            <div className="cart-info-container">
                                <li>{p.strPlayer}</li>
                                <button onClick={() => handleDelete(p.idPlayer)} className='delete-btn'><FontAwesomeIcon icon={faTrash} /></button>
                                <ToastContainer />
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;