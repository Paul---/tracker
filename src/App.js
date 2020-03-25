import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from '../src/components/Header/Header';
import HomePage from '../src/pages/HomePage/HomePage';
import WelcomePage from '../src/pages/WelcomePage/WelcomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';
import OverviewPage from '../src/pages/OverviewPage/OverviewPage';
import IssuesPage from '../src/pages/IssuesPage/IssuesPage';

function App() {
  return (
    <Container fluid>
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
        <Route path="/issues">
          <IssuesPage />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="**">
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
