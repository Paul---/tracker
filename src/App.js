import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/Header/Header';
import HomePage from '../src/pages/HomePage/HomePage';
import WelcomePage from '../src/pages/WelcomePage/WelcomePage';
import SignupPage from '../src/pages/Signup/Signup';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';
import OverviewPage from '../src/pages/OverviewPage/OverviewPage';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/overview">
          <OverviewPage />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="**">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
