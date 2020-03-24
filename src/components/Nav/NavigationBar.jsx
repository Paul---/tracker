import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar() {
  // change this to use acutal state later
  const isSignedIn = true;
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>
        <Link to={'/'}>Issue Tracker</Link>
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link>
          <Link to={'/overview'}>Overview</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={'/'}>Issues</Link>
        </Nav.Link>
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
