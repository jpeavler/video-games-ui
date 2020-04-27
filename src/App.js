import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VideoGames from './components/VideoGames';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/VideoGames">
            <VideoGames/>
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
