import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import MissionList from './components/MissionList';
import ProfileComponent from './components/Profile';
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
        <ProfileComponent />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

export default App;
