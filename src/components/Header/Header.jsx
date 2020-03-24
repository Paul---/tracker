import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import NavBar from '../Nav/NavigationBar';

export default function Header() {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant='link' eventKey='0'>
            See More
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <NavBar />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
