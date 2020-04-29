import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import VideoGame from './VideoGame';
import AddVideoGame from './AddVideoGame';
import UpdateVideoGame from './UpdateVideoGame'

const VideoGames = () =>{
    const [videoGames, setVideoGames] = useState([]);
    const [isCreate, setIsCreate] = useState(true);
    const [gameToUpdate, setUpdateGame] = useState({});

    useEffect(() =>{    //equivalent to componentDidMount
        getVideoGames();
    }, [])

    const getVideoGames = () =>{
        fetch(`${process.env.REACT_APP_API_URL}/api/video-games`)
            .then(response => response.json())
            .then(videoGames => setVideoGames(videoGames))
            .then(() => setIsCreate(true))
    }
    const deleteVideoGame = (id) =>{
        fetch(`${process.env.REACT_APP_API_URL}/api/video-games/${id}`, {
        method: 'DELETE',
        }).then(response => response.json())
            .then(getVideoGames)
    }

    const updateGame = (game) =>{
        setIsCreate(false);
        setUpdateGame(game);
    }
    const renderForm = () =>{
        let formToRender;
        if(isCreate){
            formToRender = <AddVideoGame key="createForm" refreshGames={getVideoGames}/>;
        }else{
            const data = gameToUpdate;
            console.log(`Data: ${data}`);
            formToRender = <UpdateVideoGame key={data._id} game={data} refreshGames={getVideoGames}/>;
        }
        return formToRender;
    }
    const displayGames = videoGames.map((game) =>{
        return <VideoGame key={game._id}
                game={game} 
                deleteGame={deleteVideoGame} 
                updateGame={updateGame}/>
    });

    return (
    <>
        <h1>Video Game Collection</h1>
        <Link to='/' class="link">Back to Home</Link>
        {renderForm()}
        <button onClick={getVideoGames}>Refresh Video Game List</button>
        {displayGames}
    </>
    )
}

export default VideoGames;