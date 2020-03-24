import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function NavigationBar() {
  // change this to use acutal state later
  const isSignedIn = true;
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Issue Tracker</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#overview'>Overview</Nav.Link>
        <Nav.Link href='#issues'>Issues</Nav.Link>
        <Nav.Link href='#Login'>{isSignedIn ? 'Logout' : 'Login'}</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-info'>Search</Button>
      </Form> */}
    </Navbar>
  );
}
