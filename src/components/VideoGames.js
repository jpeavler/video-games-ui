import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{
    return (
        <>
            <h1>Home</h1>
            <Link to='/' class="link">Home</Link>
        </>
    )
}

export default Home;