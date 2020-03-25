import React from 'react';
import Login from '../../components/Login/Login';
import { Container, Jumbotron } from 'react-bootstrap';

export default function SignupPage() {
  return (
    <Jumbotron>
      <Container>
        <div style={styles.container}>
          <h1>Welcome</h1>
          <h5>Signing up is a cinch!</h5>
        </div>
      </Container>
      <Login />
    </Jumbotron>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};
