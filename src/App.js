import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VideoGames from './components/VideoGames';
import BoardGames from './components/BoardGames';
import CardGames from './components/CardGames';
import MindGames from './components/MindGames'
import OutdoorGames from './components/OutdoorGames';
import Home from './components/Home';

function App() {
  return (
    <Router>
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
