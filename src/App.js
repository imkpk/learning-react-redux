// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router,Route, } from 'react-router-dom';
// import {Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './containers/UserPage';
import Homepage from './containers/Homepage';
function App(props) {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/:id' component={UserPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
