import React from 'react';

const VideoGame = ({game, deleteGame, updateGame}) =>{
    return(
        <div>
            <h4>{game.title}</h4>
            <button>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default VideoGame;