import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ListItem({ id, message, priority }) {
  return (
    <div className='container'>
      <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Message</th>
            <th>Priority</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{message}</td>
            <td>{priority}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
