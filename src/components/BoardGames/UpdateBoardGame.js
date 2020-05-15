import React, {useState} from 'react';

const UpdateBoardGame = ({refreshGames, game, id}) =>{
    const [name, setName] = useState(game.name);
    const [num_players_min, setPlayerMin] = useState(game.num_players_min);
    const [num_players_max, setPlayerMax] = useState(game.num_players_max);
    const [desc, setDesc] = useState(game.desc);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const game = {
            name,
            num_players_min,
            num_players_max,
            desc
        }
        fetch(`${process.env.REACT_APP_API_URL}/api/board-games/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(game)
        }).then(refreshGames)
            .then(() => setName(''))
            .then(() => setPlayerMin(''))
            .then(() => setPlayerMax(''))
            .then(() => setDesc(''))
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Add Board Game</h3>
            <input type='text'
                value={name}
                placeholder='Game Name' 
                onChange={({target}) => setName(target.value)} 
                required/>
            <input type='number'
                value={num_players_min}
                placeholder='Minimun Players' 
                onChange={({target}) => setPlayerMin(target.value)}
                min='1' 
                required/>
            <input type='number'
                value={num_players_max} 
                placeholder='Max Players' 
                onChange={({target}) => setPlayerMax(target.value)}
                min={num_players_min} 
                required/>
            <input type='text'
                value={desc} 
                placeholder='Game Description' 
                onChange={({target}) => setDesc(target.value)} 
                required/>
            <input type='submit'
                value='Update Game'/>
            <input type="button" 
                value="Cancel Edit" 
                onClick={refreshGames}/>
        </form>
    )
}

export default UpdateBoardGame;