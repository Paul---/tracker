import React from 'react';
import Login from '../../components/Login/Login';
import { Button, Jumbotron, Container } from 'react-bootstrap';

export default function LoginPage() {
  return (
    <Jumbotron style={styles.jumbotron}>
      <Container style={styles.headerSection} className='container-fluid'>
        <h1>Welcome</h1>
        <h3>Please Sign In</h3>
      </Container>
      <Login />
    </Jumbotron>
  );
}

const styles = {
  jumbotron: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  headerSection: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
  }
};
