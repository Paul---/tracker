import React from 'react';
import Table from 'react-bootstrap/Table';

export default function IssuesList({ children }) {
  return (
    <div>
      <h1>Issues List</h1>
      <Table responsive striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Issue Id</th>
            <th>Message</th>
            <th>Priority</th>
            <th>Created On</th>
          </tr>
        </thead>
        {children}
      </Table>
    </div>
  );
}
