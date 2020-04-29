import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import VideoGame from './VideoGame';
import AddVideoGame from './AddVideoGame';

const VideoGames = () =>{
    const [videoGames, setVideoGames] = useState([]);
    const getVideoGames = () =>{
        fetch(`${process.env.REACT_APP_API_URL}/api/video-games`)
            .then(response => response.json())
            .then(videoGames => setVideoGames(videoGames))
    }
    const displayGames = videoGames.map((game) =>{
        return <VideoGame key={game._id}
                game={game}
                />
    });
    useEffect(() =>{
        getVideoGames();
    })
    return (
    <>
        <h1>Video Game Collection</h1>
        <Link to='/' class="link">Back to Home</Link>
        <AddVideoGame refreshGames={getVideoGames}/>
        <button onClick={getVideoGames}>Refresh Video Game List</button>
        {displayGames}
    </>
    )
}

export default VideoGames;