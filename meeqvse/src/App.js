import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css'

import Home from './Containers/Home/Home';
//import Users from './Containers/Users/Users';
//import Blog from './Containers/Blog/Blog';

import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

import lazyComponent from './hoc/lazyComponent';

const Blog = lazyComponent(() => {
  return import('./Containers/Blog/Blog');
})

const Users = lazyComponent(() => {
  return import('./Containers/Users/Users');
})

function App() {
  return (
    <Router>
      <div className="container">

            <Navbar />
            <hr />


            <Switch>
            
              <Route path="/blog" component={Blog} />

              <Route path="/users" render={(props) => {
                return <Users {...props} title="Users Title" />
              }}
              />

              <Redirect from="/old/users" to="/users" />

              <Route path="/" exact>
                <Home />
              </Route>

              <Route component={NotFound} />

            </Switch>
       
      </div>
    </Router>
  );
}

export default App;
