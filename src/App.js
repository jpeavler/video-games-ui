import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VideoGames from './components/VideoGames/VideoGames';
import BoardGames from './components/BoardGames/BoardGames';
import CardGames from './components/CardGames';
import MindGames from './components/MindGames'
import OutdoorGames from './components/OutdoorGames';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <div>
        <Switch>
          <Route path="/VideoGames">
            <VideoGames/>
          </Route>
          <Route path="/BoardGames">
            <BoardGames/>
          </Route>
          <Route path="/CardGames">
            <CardGames/>
          </Route>
          <Route path="/MindGames">
            <MindGames/>
          </Route>
          <Route path="/OutdoorGames">
            <OutdoorGames/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
