import React from 'react';
import {Link} from 'react-router-dom';

const MindGames = () =>{
    return (
        <>
            <h1>Mind Games</h1>
            <Link to='/' className="link">Home</Link>
            <Link to='/VideoGames' className="link">Video Games</Link>
            <Link to='/BoardGames' className="link">Board Games</Link>
            <Link to='/CardGames' className="link">Card Games</Link>
            <Link to='/OutdoorGames' className="link">Outdoor Games</Link>
            <Link to='/MindGames' className="link">Mind Games</Link>
        </>
    )
}

export default MindGames;