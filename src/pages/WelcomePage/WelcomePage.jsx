import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default function WelcomePage() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple issue tracking system, a simple way of keeping track of issues as they arise and making sure they get addressed. This system makes it easy for your users to notify the appropriate person of each issue and provides a reliable ticket model for getting thigs done.
      </p>
      <p>
        <Button variant='primary'>Learn more</Button>
      </p>
    </Jumbotron>
  );
}
