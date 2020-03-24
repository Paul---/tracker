import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/Header/Header';
import HomePage from '../src/pages/HomePage/HomePage';
import WelcomePage from '../src/pages/WelcomePage/WelcomePage';
import SignupPage from '../src/pages/Signup/Signup';
import LoginPage from '../src/pages/LoginPage/LoginPage';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className='container-fluid'>
      {isSignedIn ? <Header /> : null}
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
        <Route exact path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
