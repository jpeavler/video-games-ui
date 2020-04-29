import React, {useState} from 'react';

const AddForm = () =>{
    const [title, setTitle] = useState('');
    const [platform, setPlatform] = useState('');
    const [num_players_min, setPlayerMin] = useState(1);
    const [num_players_max, setPlayerMax] = useState(1);
    const [desc, setDesc] = useState('');

    return(
        <form>
            <input type='text' value={title} onChange={}/>
            <input type='text' value={platform} onChange={}/>
            <input type='number' value={num_players_min} onChange={}/>
            <input type='number' value={num_players_max} onChange={}/>
            <input type='text' value={desc} onChange={}/>
            <input type='submit' value='Add to Games'/>
        </form>
    )
}

export default AddForm;