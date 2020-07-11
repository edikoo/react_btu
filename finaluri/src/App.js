import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';


import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute';


import Competition from './Components/Competitions/Competition';
import Competitions from './Components/Competitions/Competitions';
import Teams from './Components/Team/Teams';
import TeamMatch from './Components/Team/TeamMatch';

const Areas = lazy(() => import('./Components/Area/Areas'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ფინალური ედვარდ გოგიძე
         
          <Suspense fallback={<div class="spinner-border text-success" role="status"> <span class="sr-only">Loading...</span></div>}>
            <Areas ></Areas>
            </Suspense>
        </p>
        <Router>

          <Switch>


            <Route exact path="/" component={Competitions} />
            <ProtectedRoute exact path="/openTeams/:id" component={Teams} />
            <ProtectedRoute exact path="/openTeamMatch/:id" component={TeamMatch} />
            <Route exact path="/openComp/:id" component={Competition} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
