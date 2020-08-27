import React, {useState, useEffect} from 'react';
import BoardGame from './BoardGame';
import AddBoardGame from './AddBoardGame';
import UpdateBoardGame from './UpdateBoardGame';

const BoardGames = () =>{
    const [boardGames, setBoardGames] = useState([]);
    const [isCreate, setIsCreate] = useState(true);
    const [gameToUpdate, setUpdateGame] = useState();

    useEffect(() =>{    //equivalent to componentDidMount
        getBoardGames();
    }, []);

    const getBoardGames = () =>{
        fetch(`${process.env.REACT_APP_API_URL}/api/board-games`)
            .then(response => response.json())
            .then(boardGames => setBoardGames(boardGames))
            .then(() => setIsCreate(true))
    }
    const deleteBoardGame = (id) =>{
        fetch(`${process.env.REACT_APP_API_URL}/api/board-games/${id}`, {
        method: 'DELETE',
        }).then(response => response.json())
            .then(getBoardGames)
    }
    const updateGame = (game) =>{
        setIsCreate(false);
        setUpdateGame(game);
    }
    const renderForm = () =>{
        let formToRender;
        if(isCreate){
            formToRender = <AddBoardGame key="createForm" 
                refreshGames={getBoardGames}/>;
        }else{
            const data = gameToUpdate;
            console.log(`Data's ID: ${data._id}`);
            formToRender = <UpdateBoardGame key={data._id}
                id={data._id}
                game={data} 
                refreshGames={getBoardGames}/>;
        }
        return formToRender;
    }
    const displayGames = boardGames.map((game) =>{
        return <BoardGame key={game._id}
                game={game} 
                deleteGame={deleteBoardGame} 
                updateGame={updateGame}/>
    });
    return (
            <div className ='wrapper'>
                <h1>Board Game Collection</h1>
                {renderForm()}
                <main>{displayGames}</main>
            </div>
        )
}

export default BoardGames;