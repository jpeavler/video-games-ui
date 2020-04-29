import React, {useState} from 'react';

const AddVideoGame = ({refreshGames}) =>{
    const [title, setTitle] = useState('');
    const [platform, setPlatform] = useState('');
    const [num_players_min, setPlayerMin] = useState(1);
    const [num_players_max, setPlayerMax] = useState(1);
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
            //.then(() => setTitle(''))
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text'
                placeholder='Game Title' 
                onChange={({target}) => setTitle(target.value)} 
                required/>
            <input type='text' 
                placeholder='Platform' 
                onChange={({target}) => setPlatform(target.value)}
                required/>
            <input type='number' 
                placeholder='Minimun Players' 
                onChange={({target}) => setPlayerMin(target.value)}
                min='1' 
                required/>
            <input type='number' 
                placeholder='Max Players' 
                onChange={({target}) => setPlayerMax(target.value)}
                min={num_players_min} 
                required/>
            <input type='text' 
                placeholder='Game Description' 
                onChange={({target}) => setDesc(target.value)} 
                required/>
            <input type='submit'
                value='Add to Games'/>
        </form>
    )
}

export default AddVideoGame;