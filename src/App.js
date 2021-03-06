import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MissionList from './components/MissionList';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/missions">
        <MissionList />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

export default App;
