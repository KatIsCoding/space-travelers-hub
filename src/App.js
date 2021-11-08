import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProfileComponent from './components/Profile';
import Rockets from './components/Rockets';
import Header from './components/Header';
import Missions from './components/Missions';

const App = () => (
  <>
    <Header />
    <Switch>

      <Route exact path="/">
        <Rockets/>
      </Route>

      <Route path="/profile">
        <ProfileComponent/>
      </Route>

      <Route path="/missions">
        <Missions/>
      </Route>
        
      <Redirect from="*" to="/" />

    </ Switch>
    
  </>
);

export default App;
