import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css';

const Players = ({players}) => {
    
    return (
        <div>
            <div className="card-container">
            {
                players?.map(player => <SinglePlayer player={player} key={player?.idPlayer}></SinglePlayer>)
            }
            </div>
        </div>
    );
};

export default Players;