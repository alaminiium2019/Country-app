import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './Components/ContryDetails/CountryDetails';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/details/:countryName">
        <CountryDetails></CountryDetails>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
  

    
  );
}

export default App;
