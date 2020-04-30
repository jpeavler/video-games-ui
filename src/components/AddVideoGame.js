import React, {useState} from 'react';

const AddVideoGame = ({refreshGames}) =>{
    const [title, setTitle] = useState('');
    const [platform, setPlatform] = useState('');
    const [num_players_min, setPlayerMin] = useState('');
    const [num_players_max, setPlayerMax] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        const game = {
            title,
            platform,
            num_players_min,
            num_players_max,
            desc
        }
        fetch(`${process.env.REACT_APP_API_URL}/api/video-games`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(game)
        }).then(refreshGames)
            .then(() => setTitle(''))
            .then(() => setPlatform(''))
            .then(() => setPlayerMin(''))
            .then(() => setPlayerMax(''))
            .then(() => setDesc(''))
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Add Video Game</h3>
            <input type='text'
                value={title}
                placeholder='Game Title' 
                onChange={({target}) => setTitle(target.value)} 
                required/>
            <input type='text'
                value={platform}
                placeholder='Platform' 
                onChange={({target}) => setPlatform(target.value)}
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
                value='Add to Games'/>
        </form>
    )
}

export default AddVideoGame;