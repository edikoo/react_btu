import React,  {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Categories from './Components/Categories/Categories';
import CategoryItem from './Components/CategoryItem/CategoryItem';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout'
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App App-header">
        <h1>შუალედური 1 - ედვარდ გოგიძე</h1>
        {localStorage.getItem("autorizationToken") ? <div><br/><h2 className="cursor" onClick={Logout} style={{ color: "red" }}>სისტემიდან გასვლა</h2> </div> : ''}
        <Router>
          <Switch>
            <Route exact path="/" component={Categories} />
            <ProtectedRoute exact path="/openCategory/:id" component={CategoryItem} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
