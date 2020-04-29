import React, {useState} from 'react';

const AddVideoGame = () =>{
    const [title, setTitle] = useState('');
    const [platform, setPlatform] = useState('');
    const [num_players_min, setPlayerMin] = useState(1);
    const [num_players_max, setPlayerMax] = useState(1);
    const [desc, setDesc] = useState('');


    return(
        <form>
            <input type='text'
                value={title} 
                onChange={({target}) => setTitle(target.value)}/>
            <input type='text' 
                value={platform} 
                onChange={({target}) => setPlatform(target.value)}/>
            <input type='number' 
                value={num_players_min} 
                onChange={({target}) => setPlayerMin(target.value)}/>
            <input type='number' 
                value={num_players_max} 
                onChange={({target}) => setPlayerMax(target.value)}/>
            <input type='text' 
                value={desc} 
                onChange={({target}) => setDesc(target.value)}/>
            <input type='submit'
                value='Add to Games'/>
        </form>
    )
}

export default AddVideoGame;