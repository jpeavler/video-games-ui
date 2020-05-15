import React from 'react';

const BoardGame = ({game, deleteGame, updateGame}) => {
    let displayPlayers;
    let max = parseInt(game.num_players_max);
    if(max === 1){
        displayPlayers = <p>Single Player</p>
    }else if(game.num_players_min === game.num_players_max){
        displayPlayers = <p>Players: {game.num_players_max}</p>
    }else{
        displayPlayers = <p>Players: {game.num_players_min}-{game.num_players_max}</p>
    }
    return(
        <div>
            <h4>{game.name}</h4>
            {displayPlayers}
            <p>{game.desc}</p>
            <button onClick={() => deleteGame(game._id)}>Delete</button>
            <button onClick={() => updateGame(game)}>Edit</button>
        </div>
    )
}

export default BoardGame;