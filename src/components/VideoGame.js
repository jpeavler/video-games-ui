import React from 'react';

const VideoGame = ({game, deleteGame, updateGame}) =>{
    return(
        <div>
            <h4>{game.title}</h4>
            <button onClick={() => deleteGame(game._id)}>Delete</button>
            <button onClick={() => updateGame(game)}>Edit</button>
        </div>
    )
}

export default VideoGame;