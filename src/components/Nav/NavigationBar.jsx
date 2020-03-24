import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function NavigationBar() {
  // change this to use acutal state later
  const isSignedIn = true;
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link>Overview</Nav.Link>
        <Nav.Link>Issues</Nav.Link>
        <Nav.Link>
          <Link to={'/login'}>{isSignedIn ? 'Logout' : 'Login'}</Link>
        </Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-info'>Search</Button>
      </Form> */}
    </Navbar>
  );
}
