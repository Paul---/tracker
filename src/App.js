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
        <Route path="/home" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/overview" component={OverviewPage} />
        <Route path="/issues" component={IssuesPage} />
        <Route exact path="/" component={WelcomePage} />
        <Route path="**" component={NotFoundPage} />
      </Switch>
    </Container >
  );
}

export default App;
