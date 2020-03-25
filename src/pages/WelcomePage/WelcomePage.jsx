import React from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <Jumbotron>
      <h1>Super Awesome Simple Issue Tracker</h1>
      <p>
        This is a simple issue tracking system, a simple way of keeping track of
        issues as they arise and making sure they get addressed. This system
        makes it easy for your users to notify the appropriate person of each
        issue and provides a reliable ticket model for getting thigs done.
      </p>
      <Container fluid style={styles.container}>
        <Link to={'/login'}>
          <Button style={styles.button} variant='primary'>
            I already have an account
          </Button>
        </Link>
        <Link to={'/signup'}>
          <Button style={styles.button} variant='primary'>
            I need to create an account
          </Button>
        </Link>
      </Container>
    </Jumbotron>
  );
}

const styles = {
  button: {
    margin: '24px',
    marginBottom: '5px',
    fontSize: '20px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
};
